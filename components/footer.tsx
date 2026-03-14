import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="FireLog" width={120} height={32} className="invert" />
          </Link>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-slate-500">&copy; 2026 FireLog. An Arcline product.</p>
        </div>
      </div>
    </footer>
  );
}
