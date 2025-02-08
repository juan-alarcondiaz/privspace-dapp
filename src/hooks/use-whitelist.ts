import { addAddress, getWhitelist } from "@/lib/whitelist-service";
import { useState } from "react";
import { Errors } from "@/types/errors";
import NotOwnerError from "@/errors/not-owner-error";
import WhitelistCapacityReachedError from "@/errors/whitelist-capacity-reached-error";
import AddressAlreadyWhitelistedError from "@/errors/address-already-whitelisted-error";

export default function useWhitelist() {
  const [whitelist, setWhitelist] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleAddAddress(address: string): Promise<void> {
    try {
      await addAddress(address);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message.includes(Errors.NotOwner)) {
          throw new NotOwnerError()
        }
        if (e.message.includes(Errors.WhitelistCapacityReached)) {
          throw new WhitelistCapacityReachedError();
        }
        if (e.message.includes(Errors.AddressAlreadyWhitelisted)) {
          throw new AddressAlreadyWhitelistedError();
        }
      }
      throw new Error("Ocurrio un error");
    }
  }

  async function handleGetWhitelist(): Promise<void> {
    try {
      setLoading(true);
      setWhitelist(await getWhitelist());
      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message.includes(Errors.NotOwner)) {
          throw new NotOwnerError()
        }
      }
      throw new Error("Ocurrio un error");
    }
  }

  return { whitelist, loading, setWhitelist, handleAddAddress, handleGetWhitelist };

}