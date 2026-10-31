import { ChevronDown } from "lucide-react";
import { useI18n } from "../i18n";

export function Faq() {
  const { t } = useI18n();
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="container-nova max-w-3xl">
        <h2 className="section-title text-center">{t.faq.title}</h2>
        <div className="mt-10 space-y-3">
          {t.faq.items.map((item) => (
            <details key={item.q} className="card group !p-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-nova-cyan transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-7 text-nova-gray">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
