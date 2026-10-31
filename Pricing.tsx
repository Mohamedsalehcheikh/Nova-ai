import { Check } from "lucide-react";
import { useI18n } from "../i18n";

/**
 * No prices and no checkout on purpose: paid plans are not active and no payment
 * provider has been verified for Algeria yet. Do not add fake payment flows here.
 */
export function Pricing() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="border-y border-nova-line bg-nova-card/40 py-16 sm:py-20">
      <div className="container-nova">
        <div className="text-center">
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-sub mx-auto max-w-2xl">{t.pricing.subtitle}</p>
        </div>
        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {t.pricing.plans.map((plan) => {
            const isFree = plan.id === "free";
            const featured = plan.id === "pro";
            return (
              <li
                key={plan.id}
                className={`card flex flex-col ${featured ? "border-nova-cyan/70 shadow-glow" : ""}`}
              >
                {featured && (
                  <span className="mb-3 self-start rounded-full bg-nova-cyan/15 px-3 py-0.5 text-xs font-bold text-nova-cyan">
                    {t.pricing.popular}
                  </span>
                )}
                <h3 className="text-xl font-extrabold">{plan.name}</h3>
                <p className="mt-1 text-sm text-nova-gray">
                  {isFree ? t.pricing.free : t.pricing.soonPrice}
                </p>
                <ul className="my-5 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-1 shrink-0 text-nova-cyan" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {isFree ? (
                  <a href="#tools" className="btn-primary">
                    {t.pricing.freeCta}
                  </a>
                ) : (
                  <button type="button" className="btn-ghost cursor-not-allowed opacity-70" disabled>
                    {t.pricing.soonCta}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
