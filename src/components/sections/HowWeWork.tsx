import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";

const steps = [
  {
    title: "Consulta inicial",
    description: "Entendemos o seu caso e suas necessidades.",
  },
  {
    title: "Análise jurídica",
    description: "Estudamos os detalhes e traçamos a melhor estratégia.",
  },
  {
    title: "Atuação personalizada",
    description: "Você acompanha cada etapa do seu processo.",
  },
  {
    title: "Resultados",
    description: "Com foco na sua tranquilidade e nos seus direitos.",
  },
];

export function HowWeWork() {
  return (
    <section id="como-atuamos" className="section how-we-work">
      <div className="container">
        <Reveal className="process-intro" repeat>
          <SectionTitle eyebrow="Como atuamos" title="Do primeiro contato à solução." />
          <p>
            Cada caso é único. Por isso, nosso trabalho é construído com escuta,
            análise e estratégia, para que você tenha segurança em todas as etapas.
          </p>
        </Reveal>

        <div className="process-steps">
          {steps.map((step, index) => (
            <Reveal key={step.title} repeat>
              <article className="process-step">
                <span className="process-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
