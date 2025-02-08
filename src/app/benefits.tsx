import Image from "next/image";
import benefit from "@/public/benefit.webp";
import InfoCard from "@/components/info-card";
import Key from "@/public/key.svg";
import Security from "@/public/security.svg";
import Privacy from "@/public/privacy.svg";
import Audit from "@/public/audit.svg";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="spacing-col-1 snap-start scroll-mt-32 lg:scroll-mt-36"
    >
      <header className="spacing-col-1">
        <h2>
          Tu información,{" "}
          <span className="text-minsk-600">bajo tu control</span>
        </h2>
        <Image
          src={benefit}
          alt="Beneficio"
          className="w-64 sm:w-80 lg:w-[350px]"
        />
      </header>
      <div className="flex w-full flex-col gap-7 md:grid md:grid-cols-2 2xl:grid-cols-4">
        <InfoCard
          icon={<Key className="size-9 sm:size-11" />}
          title="Acceso exclusivo"
          content="El acceso esta limitado a usuarios autorizados"
        />
        <InfoCard
          icon={<Security className="size-9 sm:size-11" />}
          title="Seguridad"
          content="Protección de datos con tecnologíá blockchain"
        />
        <InfoCard
          icon={<Privacy className="size-9 sm:size-11" />}
          title="Privacidad"
          content="Almacenamiento de datos sin exposición a terceros"
        />
        <InfoCard
          icon={<Audit className="size-9 sm:size-11" />}
          title="Auditabilidad"
          content="Registro completo y transparente de todas las operaciones y accesos"
        />
      </div>
    </section>
  );
}
