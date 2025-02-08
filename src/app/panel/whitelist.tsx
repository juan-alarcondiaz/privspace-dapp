"use client"

import AddressForm from "@/app/panel/address-form";
import { Button } from "@/components/ui/button";
import useWhitelist from "@/hooks/use-whitelist";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { WhitelistContext } from "contexts";

export default function Whitelist() {
  const [visible, setVisible] = useState<boolean>(false);
  const { loading, whitelist, setWhitelist, handleGetWhitelist, handleAddAddress } = useWhitelist();

  async function showWhitelist(): Promise<void> {
    setVisible(!visible);
    await getWhiteList();
  }
  
  async function getWhiteList(): Promise<void> {
    await handleGetWhitelist();
  }

  return (
    <WhitelistContext.Provider value={{ setWhitelist, handleAddAddress }}>
      <section className="flex flex-col gap-5 rounded-2xl bg-jaguar-50 p-6 text-jaguar-950 lg:w-[450px]">
        <header className="flex items-center gap-5">
          <h3>Lista blanca</h3>
          <AddressForm />
        </header>
        <div className="relative">
          <ul className={`flex flex-col gap-5 ${visible ? "" : "blur-sm"}`}>
            {visible ? (
              loading ? (
                <>
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4" />
                </>
              ) : (
                whitelist.map((address) => <li key={address}>{address}</li>)
              )
            ) : (
              <>
                <li>
                  <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                </li>
                <li>
                  <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                </li>
                <li>
                  <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                </li>
                <li>
                  <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                </li>
              </>
            )}
          </ul>
          {!visible && (
            <Button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={showWhitelist}
            >
              Mostrar
            </Button>
          )}
        </div>
      </section>
    </WhitelistContext.Provider>
  );
}