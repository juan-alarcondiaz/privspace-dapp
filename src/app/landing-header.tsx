"use client"

import KiiChain from "@/public/kiichain.svg";
import Menu from "@/public/menu.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/header";

export default function LandingHeader() {
  const [openNav, setOpenNav] = useState(false);

  function toggleNav() {
    setOpenNav(!openNav);
  }

  return (
    <Header
      className={`overflow-hidden p-3 transition-[height] duration-200 lg:left-1/2 lg:h-fit lg:w-fit lg:-translate-x-1/2 ${!openNav ? "h-[52px]" : "h-[285px]"}`}
    >
      <nav className="flex w-full flex-col gap-8 lg:flex-row lg:gap-14">
        <div className="flex w-full items-center justify-between">
          <KiiChain />
          <Menu className="lg:hidden" onClick={toggleNav} />
        </div>
        <ol className="flex flex-col items-center gap-4 text-base font-medium text-white-50 lg:flex-row">
          <li>
            <Link href="/#home">Inicio</Link>
          </li>
          <li>
            <Link href="/#benefits">Beneficios</Link>
          </li>
          <li>
            <Link href="/#questions">Preguntas</Link>
          </li>
        </ol>
        <Link
          className={`w-full lg:w-52 ${buttonVariants({ variant: "alternative" })}`}
          href="/login"
        >
          Iniciar sesión
        </Link>
      </nav>
    </Header>
  );
}
