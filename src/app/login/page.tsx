"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/use-auth";
import KiiChain from "@/public/kiichain.svg";
import Header from "@/components/header";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const router = useRouter();
  const { handleAuthentication } = useAuth();
  const { toast } = useToast();

  async function login(): Promise<void> {
    try {
      await handleAuthentication();
      router.push("/panel");
    } catch (e) {
      if (e instanceof Error) {
        toast({
          variant: "error",
          title: e.message,
        })
      }
    }
  }

  return (
    <>
      <Header className="justify-center">
        <KiiChain />
      </Header>
      <main>
        <div className="mx-auto flex max-w-fit flex-col items-center gap-10 rounded-3xl bg-jaguar-50 p-8">
          <header>
            <h1 className="text-center">Inicia sesión en PrivSpace</h1>
          </header>
          <Button onClick={login}>
            <Wallet />
            Conectar wallet
          </Button>
        </div>
      </main>
    </>
  );
}
