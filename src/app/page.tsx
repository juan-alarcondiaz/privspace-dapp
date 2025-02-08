import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Questions from "@/app/questions";
import Benefits from "@/app/benefits";
import LandingHeader from "@/app/landing-header";
import Hero from "@/app/hero";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="mx-auto mt-20 flex max-w-screen-2xl flex-col gap-36 pb-16 text-center text-white-50">
        <Hero />
        <Benefits />
        <Questions />
        <section className="spacing-col-1 max-w-screen-2xl rounded-3xl bg-gradient-to-t from-revolver-900 to-jaguar-800 py-6">
          <header>
            <h2>¿Listo para proteger tu información?</h2>
          </header>
          <Link className={`hover:bg-jaguar-900 ${buttonVariants()}`} href="/login">
            Empieza ya
          </Link>
        </section>
      </main>
    </>
  );
}
