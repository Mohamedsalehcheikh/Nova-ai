import { useI18n } from "../i18n";

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section id="how" className="border-y border-nova-line bg-nova-card/40 py-16 sm:py-20">
      <div className="container-nova">
        <div className="text-center">
          <h2 className="section-title">{t.how.title}</h2>
          <p className="section-sub">{t.how.subtitle}</p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <li key={step.title} className="card text-center">
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-nova-blue to-nova-cyan text-lg font-extrabold">
                {i + 1}
              </span>
              <h3 className="font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-nova-gray">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
