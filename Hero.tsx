import { Sparkles } from "lucide-react";
import { useI18n } from "../i18n";

function PreviewMock() {
  const { t } = useI18n();
  return (
    <figure className="relative mx-auto w-full max-w-md animate-float">
      <div
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-nova-blue/30 to-nova-cyan/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative rounded-2xl border border-nova-line bg-nova-card p-5 shadow-glow">
        <div className="mb-4 flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-nova-blue" />
          <span className="h-2.5 w-2.5 rounded-full bg-nova-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-nova-gray/60" />
          <span className="ms-auto text-xs text-nova-gray">{t.hero.previewTool}</span>
        </div>

        <div className="space-y-3">
          <div>
            <div className="mb-1 text-xs text-nova-gray">{t.hero.previewField1}</div>
            <div className="h-9 rounded-lg border border-nova-line bg-nova-navy" aria-hidden="true" />
          </div>
          <div>
            <div className="mb-1 text-xs text-nova-gray">{t.hero.previewField2}</div>
            <div className="h-9 rounded-lg border border-nova-line bg-nova-navy" aria-hidden="true" />
          </div>
          <div className="btn-primary w-full cursor-default select-none" aria-hidden="true">
            <Sparkles size={16} />
            {t.hero.previewButton}
          </div>
        </div>

        <div className="mt-4 space-y-2 rounded-xl border border-nova-line bg-nova-navy p-3" aria-hidden="true">
          <div className="h-2.5 w-11/12 animate-shimmer rounded bg-nova-blue/50" />
          <div className="h-2.5 w-9/12 animate-shimmer rounded bg-nova-cyan/40 [animation-delay:0.3s]" />
          <div className="h-2.5 w-10/12 animate-shimmer rounded bg-nova-blue/40 [animation-delay:0.6s]" />
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-nova-gray">{t.hero.previewLabel}</figcaption>
    </figure>
  );
}

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-40 start-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-nova-blue/20 blur-3xl rtl:translate-x-1/2"
        aria-hidden="true"
      />
      <div className="container-nova relative grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-nova-line bg-white/5 px-3 py-1 text-xs text-nova-cyan">
            <Sparkles size={14} aria-hidden="true" />
            {t.hero.badge}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-nova-gray sm:text-lg lg:mx-0">
            {t.hero.text}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#tools" className="btn-primary">
              {t.hero.primary}
            </a>
            <a href="#tools" className="btn-ghost">
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <PreviewMock />
      </div>
    </section>
  );
}
