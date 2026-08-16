'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// D7 (RI-2 acceptance criteria): the Starter Kit was reachable only by typing the
// URL — absent from navigation, the homepage, and the footer. A payment link can
// exist forever without making a product purchasable; a product is purchasable
// only when a visitor can discover it and complete the purchase. Discoverability
// is therefore an acceptance criterion of RI-2, not an adjacent concern.
const navLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Labs', href: '/labs' },
  { label: 'Starter Kit', href: '/products/ai-engineering-starter-kit' },
  { label: 'Articles', href: '/articles' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      style={{
        backgroundColor: scrolled || open ? 'rgba(2, 8, 23, 0.96)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled || open ? 'blur(12px)' : 'none',
        borderColor: open || scrolled ? '#1C2E4A' : 'transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="font-bold text-lg tracking-tight" style={{ color: '#E2EBF8' }}>
            Terra Pay
          </span>
          <span className="font-bold text-lg tracking-tight" style={{ color: '#38BDF8' }}>
            X
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: pathname.startsWith(link.href) ? '#E2EBF8' : '#94A3B8' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E2EBF8')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = pathname.startsWith(link.href)
                  ? '#E2EBF8'
                  : '#94A3B8')
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            style={{ background: '#38BDF8', color: '#020817' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#7DD3FC')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#38BDF8')}
          >
            Request a Strategy Session
          </Link>

          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span
              className="block h-0.5 w-5 mx-auto transition-all duration-200"
              style={{
                background: '#E2EBF8',
                transform: open ? 'rotate(45deg) translate(3px, 4px)' : 'none',
              }}
            />
            <span
              className="block h-0.5 w-5 mx-auto transition-all duration-200"
              style={{ background: '#E2EBF8', opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-5 mx-auto transition-all duration-200"
              style={{
                background: '#E2EBF8',
                transform: open ? 'rotate(-45deg) translate(3px, -4px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pt-2 pb-6 flex flex-col gap-1"
          style={{ borderTop: '1px solid #1C2E4A' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2.5"
              style={{ color: pathname.startsWith(link.href) ? '#E2EBF8' : '#94A3B8' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/book"
              className="flex justify-center px-4 py-3 rounded-lg text-sm font-semibold"
              style={{ background: '#38BDF8', color: '#020817' }}
            >
              Request a Strategy Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
