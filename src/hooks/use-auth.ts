"use client";

import {
  authenticate,
  clearAuthentication, getAuthentication,
  setAuthentication
} from "@/lib/auth-service";
import { Errors } from "@/types/errors";
import UnauthorizedWalletError from "@/errors/unauthorized-wallet-error";
import { useContext } from "react";
import { AuthContext } from "@/contexts";

export default function useAuth() {

  const { setUser } = useContext(AuthContext);

  async function handleAuthentication(): Promise<boolean> {
    let role: number;
    try {
      role = await authenticate();
    } catch (e) {
      if (e instanceof Error) {
        if(e.message.includes(Errors.AddressNotWhitelisted)) {
          throw new UnauthorizedWalletError();
        }
      }
      throw new Error("Ocurrio un error");
    }
    setAuthentication(role);
    setUser(await getAuthentication());
    return true;
  }

  function handleLogout(): void {
    clearAuthentication();
  }

  return { handleAuthentication, handleLogout };
}
