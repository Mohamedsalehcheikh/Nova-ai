import { Logo } from "../components/Logo";
import { useI18n } from "../i18n";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { href: "#tools", label: t.nav.tools },
    { href: "#how", label: t.nav.how },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];
  return (
    <footer className="border-t border-nova-line py-10">
      <div className="container-nova grid gap-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-nova-gray">{t.brand.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-nova-gray">{t.footer.about}</p>
        </div>
        <nav aria-label={t.footer.links}>
          <h2 className="mb-3 font-bold">{t.footer.links}</h2>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-nova-gray hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:text-end">
          <a href="#top" className="btn-ghost">
            {t.footer.top}
          </a>
        </div>
      </div>
      <p className="container-nova mt-8 text-center text-xs text-nova-gray">
        © {new Date().getFullYear()} NOVA AI. {t.footer.rights}
      </p>
    </footer>
  );
}
