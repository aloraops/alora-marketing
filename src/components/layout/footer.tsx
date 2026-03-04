import Link from 'next/link';
import Image from 'next/image';

const footerNavigation = {
  solutions: [
    { name: 'PO Risk & Tracking', href: '/solutions/po-risk-tracking' },
    { name: 'Build Readiness', href: '/solutions/build-readiness' },
    { name: 'Vendor Scoring', href: '/solutions/vendor-scoring' },
  ],
  industries: [
    { name: 'Medical Devices', href: '/industries/medical-devices' },
    { name: 'Defense & Aerospace', href: '/industries/defense-aerospace' },
    { name: 'Robotics & Automation', href: '/industries/robotics-automation' },
    { name: 'Industrial Equipment', href: '/industries/industrial-equipment' },
  ],
  company: [
    { name: 'About Us', href: '/company' },
    { name: 'Resources', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <Image
              src="/images/alora_logo_full.svg"
              alt="Alora"
              width={100}
              height={28}
              className="h-7 w-auto"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered supply chain operations for complex hardware manufacturers.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Solutions</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Industries column hidden until partner review
            <div>
              <h3 className="text-sm font-semibold text-foreground">Industries</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.industries.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Alora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
