import { BrandInstagram, Menu2 } from "tabler-icons-react";
import { Crimson_Pro } from "next/font/google";
import Link from "next/link";

const font = Crimson_Pro({ subsets: ["latin"] });

export default function Header() {
  return (
    <header
      className={`flex justify-between pt-4 w-full mb-4 ${font.className}`}
    >
      <a href="https://www.instagram.com/weronikabern/" target="_blank">
        <BrandInstagram size={24} />
      </a>

      <div className="flex flex-col items-center">
        <h1 className="text-3xl">Weronika Bern</h1>
        <nav className="flex gap-4 mt-4 text-lg">
          <Link href="/">home</Link>
          <Link href="/pictures">pictures</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
        </nav>
      </div>
      <div>
        <Menu2 size={24} className={"lg:hidden"} />
      </div>
    </header>
  );
}
