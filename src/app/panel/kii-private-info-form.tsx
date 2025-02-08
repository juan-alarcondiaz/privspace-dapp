"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { KiiPrivateInfoContext } from "@/contexts";
import { Contract } from "ethers";
import loadContract from "@/core/private-info-storage";
import { Spinner } from "@/components/ui/spinner";

const formSchema = z.object({
  privateInfo: z.string().nonempty("Debes completar este campo"),
});

export default function KiiPrivateInfoForm() {
  const [dialogState, setDialogState] = useState(false);
  const isInfoUpdatingRef = useRef(false);
  const { setKiiPrivateInfo, handleSetKiiPrivateInfo } = useContext(KiiPrivateInfoContext);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { privateInfo: "" },
  });

  useEffect(() => {
    let contract: Contract;
    async function listeners() {
      contract = await loadContract();
      contract.on("KiiPrivateInfoUpdated", listenerKiiPrivateInfoUpdated);
    }
    listeners();

    return () => {
      if (contract) {
        contract.off("KiiPrivateInfoUpdated", listenerKiiPrivateInfoUpdated);
      }
    }
  }, []);

  function listenerKiiPrivateInfoUpdated(kiiPrivateInfo: string): void {
    if (isInfoUpdatingRef.current) {
      setKiiPrivateInfo(kiiPrivateInfo);
      isInfoUpdatingRef.current = false;
      setDialogState(false);
      toast({
        variant: "success",
        title: "Información privada actualizada",
      });
    }

  }

  async function updateKiiPrivateInfo(
    values: z.infer<typeof formSchema>,
  ): Promise<void> {
    try {
      isInfoUpdatingRef.current = true;
      await handleSetKiiPrivateInfo(values.privateInfo);
    } catch (e) {
      if (e instanceof Error) {
        isInfoUpdatingRef.current = false;
        setDialogState(false);
        toast({
          variant: "error",
          title: e.message
        })
      }
    }
  }

  return (
    <Dialog open={dialogState} onOpenChange={setDialogState}>
      <DialogTrigger asChild>
        <Button>Modificar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar información privada</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(updateKiiPrivateInfo)}
            className="flex flex-col gap-8"
          >
            <FormField
              control={form.control}
              name="privateInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Información privada</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.privateInfo?.message}
                  </FormMessage>
                </FormItem>
              )}
            ></FormField>
            <Button type="submit" className="self-center">
              {isInfoUpdatingRef.current ? <Spinner size="sm" className="bg-white-50" /> : "Guardar"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
