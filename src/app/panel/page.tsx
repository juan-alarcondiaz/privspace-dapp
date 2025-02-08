"use client";

import SessionHeader from "@/components/session-header";
import Whitelist from "@/app/panel/whitelist";
import { useContext, useEffect } from "react";
import { Role } from "@/core/enums/role";
import PrivateInfo from "@/app/panel/private-info";
import { AuthContext } from "@/contexts";
import { useRouter } from "next/navigation";

export default function Panel() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if(!loading && !user) {
        router.push("/login");
    }
  }, [user, loading, router])

  if (loading) return <></>;


  if (user)
    return (
    <>
      <SessionHeader />
      <main className="flex flex-col items-center gap-20 pb-16 lg:flex-row lg:items-start lg:justify-center">
        <section className="flex flex-col items-center gap-7">
          <PrivateInfo />
        </section>
        {user?.role == Role.Owner && <Whitelist />}
      </main>
    </>
  );
}
