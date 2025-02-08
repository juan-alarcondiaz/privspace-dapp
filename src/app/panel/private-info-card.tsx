"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { KiiPrivateInfoContext } from "@/contexts";

export default function PrivateInfoCard() {
  const [visible, setVisible] = useState<boolean>(true);
  const { kiiPrivateInfo, loading, handleGetKiiPrivateInfo } = useContext(KiiPrivateInfoContext);

  useEffect(() => {
    getKiiPrivateInfo();
  }, []);

  function toggleVisibility(): void {
    setVisible(!visible);
  }

  async function getKiiPrivateInfo(): Promise<void> {
    await handleGetKiiPrivateInfo();
  }

  return (
    <Card className="border-none bg-jaguar-50 text-jaguar-950">
      <CardHeader className="rounded-2xl border border-revolver-400 bg-revolver-200 p-5">
        <CardTitle>Información privada</CardTitle>
        {visible ? (
          <Eye
            className="size-5"
            onClick={toggleVisibility}
            aria-label="Ocultar información privada"
          />
        ) : (
          <EyeOff
            className="size-5"
            onClick={toggleVisibility}
            aria-label="Mostrar información privada"
          />
        )}
      </CardHeader>
      <CardContent className="text-center text-lg font-bold">
        {loading ? <Skeleton className="h-[30px]"></Skeleton> : ( visible ? kiiPrivateInfo : "***************") }
      </CardContent>
    </Card>
  );
}
