"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { WhitelistContext } from "@/contexts";
import { Spinner } from "@/components/ui/spinner";
import { Contract } from "ethers";
import loadContract from "@/core/private-info-storage";

const formSchema = z.object({
  address: z.string().nonempty("Debes completar este campo")
});

export default function AddressForm() {
  const [dialogState, setDialogState] = useState(false);
  const isAddingAddressRef = useRef(false);
  const mountedRef = useRef(false);
  const { setWhitelist, handleAddAddress } = useContext(WhitelistContext);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { address: "" }
  });

  useEffect(() => {
    let contract: Contract;

    async function listeners() {
      if (!mountedRef.current) {
        mountedRef.current = true;
        contract = await loadContract();
        contract.on("AddedAddress", listenerAddAddress);
      }
    }

    listeners();

    return () => {
      if (contract) {
        contract.off("AddedAddress", listenerAddAddress);
      }
    }

  }, []);

  function listenerAddAddress(address: string): void {
    if (isAddingAddressRef.current) {
      setWhitelist((prevWhitelist) => [...prevWhitelist, address]);
      isAddingAddressRef.current = false;
      setDialogState(false);
      toast({
        variant: "success",
        title: "Dirección agregada"
      });
    }
  }

  async function addAddress(
    values: z.infer<typeof formSchema>
  ): Promise<void> {
    try {
      isAddingAddressRef.current = true;
      await handleAddAddress(values.address);
    } catch (e) {
      if (e instanceof Error) {
        isAddingAddressRef.current = false;
        setDialogState(false);
        toast({
          variant: "error",
          title: e.message
        })
      }
    }
  }

  return <Dialog
    open={dialogState}
    onOpenChange={setDialogState}
  >
    <DialogTrigger asChild>
      <Button variant="icon" size="icon">
        <Plus aria-label="Agregar wallet" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Agregar wallet</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(addAddress)}
          className="flex flex-col gap-8"
        >
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wallet</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.address?.message }
                </FormMessage>
              </FormItem>
            )}
          ></FormField>
          <Button type="submit" className="self-center">
            {isAddingAddressRef.current ? <Spinner size="sm" className="bg-white-50" /> : "Guardar"}
          </Button>
        </form>
      </Form>
    </DialogContent>
  </Dialog>
}