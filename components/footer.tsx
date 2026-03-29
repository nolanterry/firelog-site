import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#0f172a] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="FireLog" width={28} height={28} className="invert" />
            <span className="font-bold text-lg">FireLog</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/getting-started" className="hover:text-white transition-colors">Getting Started</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/customers" className="hover:text-white transition-colors">Customers</Link>
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <Link href="/help" className="hover:text-white transition-colors">Help</Link>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
          </div>
          <p className="text-sm text-slate-500">&copy; 2026 FireLog. An Arcline product.</p>
        </div>
      </div>
    </footer>
  );
}
