import Link from 'next/link';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'Architecture', href: '/platform#architecture' },
    ],
  },
  {
    title: 'Labs',
    links: [
      { label: 'Labs Overview', href: '/labs' },
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Articles', href: '/articles' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'GitHub', href: 'https://github.com/terrapayx' },
      // labs@ is canonical (Founder decision D1, 2026-07-27): it is the only
      // Terra Pay X address with positive evidence of receiving mail. contact@
      // is not provisioned-verified and is therefore not published.
      { label: 'labs@terrapayx.com', href: 'mailto:labs@terrapayx.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="px-6 py-16"
      style={{ background: '#020817', borderTop: '1px solid #1C2E4A' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <span className="font-bold text-base" style={{ color: '#E2EBF8' }}>Terra Pay</span>
              <span className="font-bold text-base" style={{ color: '#38BDF8' }}>X</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
              Cloud-native financial infrastructure and intelligent operational systems.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
              Platform · Labs · Advisory
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#38BDF8' }}
              >
                {section.title}
              </p>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm transition-colors duration-200 text-muted hover:text-text"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid #1C2E4A' }}
        >
          <p className="text-xs" style={{ color: '#64748B' }}>
            &copy; 2026 Terra Pay X. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#64748B' }}>
            Terra Pay X Labs — Advisory &amp; Innovation Division
          </p>
        </div>
      </div>
    </footer>
  );
}
