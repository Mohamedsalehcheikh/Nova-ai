import {
  Briefcase,
  GraduationCap,
  Languages,
  Lightbulb,
  Mail,
  PenTool,
  ShoppingBag,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "../i18n";

const ICONS: Record<string, LucideIcon> = {
  content: PenTool,
  business: Briefcase,
  email: Mail,
  product: ShoppingBag,
  study: GraduationCap,
  prompt: Wand2,
  translate: Languages,
  idea: Lightbulb,
};

export function Tools() {
  const { t } = useI18n();
  return (
    <section id="tools" className="py-16 sm:py-20">
      <div className="container-nova">
        <div className="text-center">
          <h2 className="section-title">{t.tools.title}</h2>
          <p className="section-sub">{t.tools.subtitle}</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.tools.items.map((tool) => {
            const Icon = ICONS[tool.icon] ?? PenTool;
            return (
              <li key={tool.name} className="card">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-nova-blue to-nova-cyan">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="font-bold">{tool.name}</h3>
                <p className="mt-2 text-sm leading-7 text-nova-gray">{tool.desc}</p>
                <span className="mt-3 inline-block rounded-full border border-nova-line px-2.5 py-0.5 text-xs text-nova-cyan">
                  {t.tools.soon}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
