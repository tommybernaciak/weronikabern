import { Crimson_Pro } from "next/font/google";
import Link from "next/link";

const font = Crimson_Pro({ subsets: ["latin"] });

export default function Header() {
  return (
    <div
      className={`flex flex-col items-center justify-between p-1 w-full ${font.className}`}
    >
      <h1 className="text-3xl">Weronika Bern</h1>
      <nav className="flex gap-4 mt-4 text-lg">
        <Link href="/">home</Link>
        <Link href="/pictures">pictures</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </div>
  );
}
