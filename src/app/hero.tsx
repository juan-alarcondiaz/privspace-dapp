import Image from "next/image";
import hero from "@/public/hero.webp";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return <header
    id="home"
    className="spacing-col-1 snap-start scroll-mt-32 sm:px-6 xl:max-w-6xl xl:mx-auto lg:scroll-mt-36 lg:flex-row"
  >
    <Image src={hero} alt="hero" className="w-80 sm:w-96 lg:w-[400px]" />
    <div className="spacing-col-1">
      <h1>
        Tu almacenamiento seguro y descentralizado impulsado por
        blockchain
      </h1>
      <Link className={buttonVariants()} href="/login">
        Empezar
      </Link>
    </div>
  </header>
}