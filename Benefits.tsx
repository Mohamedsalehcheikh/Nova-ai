import { Check } from "lucide-react";
import { useI18n } from "../i18n";

export function Benefits() {
  const { t } = useI18n();
  return (
    <section id="benefits" className="py-16 sm:py-20">
      <div className="container-nova">
        <h2 className="section-title text-center">{t.benefits.title}</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {t.benefits.items.map((b) => (
            <li key={b.title} className="card flex gap-4">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-nova-cyan/15 text-nova-cyan">
                <Check size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold">{b.title}</h3>
                <p className="mt-1 text-sm leading-7 text-nova-gray">{b.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
