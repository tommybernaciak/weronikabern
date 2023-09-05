import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-2 ${inter.className} bg-slate-200`}
    >
      contact
    </div>
  );
}
