import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "../i18n";

export function Navbar() {
  const { t, toggle } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#tools", label: t.nav.tools },
    { href: "#how", label: t.nav.how },
    { href: "#benefits", label: t.nav.benefits },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-nova-line bg-nova-navy/85 backdrop-blur">
      <nav className="container-nova flex h-16 items-center justify-between gap-4" aria-label="Main">
        <a href="#top" aria-label="NOVA AI" onClick={close}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-nova-gray transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.switchLabel}
            className="btn-ghost !px-3 !py-2"
          >
            <Globe size={16} aria-hidden="true" />
            {t.nav.switchTo}
          </button>
          <a href="#tools" className="btn-primary hidden !py-2 sm:inline-flex">
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="btn-ghost !px-2.5 !py-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-nova-line bg-nova-navy md:hidden">
          <ul className="container-nova flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block rounded-lg px-2 py-3 text-nova-gray hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-2">
              <a href="#tools" onClick={close} className="btn-primary w-full">
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
