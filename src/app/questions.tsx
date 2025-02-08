import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Questions() {
  return <section id="questions" className="mx-auto w-full max-w-[800px] scroll-mt-32 lg:scroll-mt-36 snap-start spacing-col-1">
    <header className="spacing-col-1">
      <h2>
        <span className="text-minsk-600">Aclaremos</span> tus inquietudes
      </h2>
    </header>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Que es blockchain?</AccordionTrigger>
        <AccordionContent>Blockchain es una tecnología innovadora que almacena datos de manera descentralizada, segura y transparente. Es como un libro de registro digital que nadie puede alterar, y es la base de criptomonedas y aplicaciones modernas.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Que es una whitelist?</AccordionTrigger>
        <AccordionContent>Una whitelist es una lista exclusiva que permite a ciertas personas obtener acceso anticipado o especial a servicios, eventos o productos. ¡Es como estar en la lista VIP de las oportunidades!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>¿Necesito conocimientos técnicos para usar la app?</AccordionTrigger>
        <AccordionContent>¡Para nada! Nuestra app está diseñada para ser simple y amigable, sin importar tu experiencia técnica. Nos encargamos de la tecnología, tú disfruta de la experiencia.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
}