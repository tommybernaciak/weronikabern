import { Crimson_Pro } from "next/font/google";

const font = Crimson_Pro({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div
      className={`flex flex-col items-center justify-between p-1 w-full ${font.className}`}
    >
      <h3 className="text-sm">© 2023 Weronika Bern</h3>
    </div>
  );
}
