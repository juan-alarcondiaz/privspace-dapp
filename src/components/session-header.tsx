"use client"

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import useAuth from "@/hooks/use-auth";
import KiiChain from "@/public/kiichain.svg";
import Profile from "@/public/profile.svg";
import { Wallet } from "lucide-react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts";

export default function SessionHeader() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { handleLogout } = useAuth();

  function exit() {
    handleLogout();
    router.push("/");
  }

  return <>
    <Header className="justify-between items-center">
      <KiiChain />
      <Dialog modal={false}>
        <DialogTrigger asChild>
          <Profile className="size-7 cursor-pointer"/>
        </DialogTrigger>
        <DialogContent button={false} className="w-72 top-[200px] left-[revert]
         right-3 -translate-x-3 translate-y-[-100px]
         data-[state=closed]:slide-out-to-right-[-12px]
         data-[state=closed]:slide-out-to-top-[90px]
         data-[state=open]:slide-in-from-right-[-12px]
         data-[state=open]:slide-in-from-top-[90px]">
          <DialogHeader className="w-full  flex flex-col gap-3 items-center">
              <Profile className="size-16 fill-white-50"/>
              <DialogTitle>
                Perfil
              </DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-5">
            <Wallet className="size-7 shrink-0"/>
            <span className="break-all">{user?.user}</span>
          </div>
          <Button className="w-full" onClick={exit}>Salir</Button>
        </DialogContent>
      </Dialog>
    </Header>
  </>;
}