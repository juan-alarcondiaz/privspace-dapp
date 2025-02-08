import {
  getKiiPrivateInfo,
  updateKiiPrivateInfo,
} from "@/lib/kii-private-info-service";
import { useState } from "react";
import { Errors } from "@/types/errors";
import NotOwnerError from "@/errors/not-owner-error";
import UnauthorizedWalletError from "@/errors/unauthorized-wallet-error";

export default function useKiiPrivateInfo() {
  const [kiiPrivateInfo, setKiiPrivateInfo] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  async function handleSetKiiPrivateInfo(
    kiiPrivateInfo: string,
  ): Promise<void> {
    try {
      await updateKiiPrivateInfo(kiiPrivateInfo);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message.includes(Errors.NotOwner)) {
          throw new NotOwnerError();
        }
      }
      throw new Error("Ocurrio un error");
    }
  }

  async function handleGetKiiPrivateInfo(): Promise<void> {
    try {
      setLoading(true);
      setKiiPrivateInfo(await getKiiPrivateInfo());
      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message.includes(Errors.AddressNotWhitelisted)) {
          throw new UnauthorizedWalletError();
        }
      }
      throw new Error("Ocurrio un error");
    }
  }

  return {
    loading,
    kiiPrivateInfo,
    setKiiPrivateInfo,
    handleGetKiiPrivateInfo,
    handleSetKiiPrivateInfo,
  };
}
