import { Cormorant_Infant } from "next/font/google";

const font = Cormorant_Infant({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex  flex-col items-center ${font.className} `}>
      Weronika Bern
    </div>
  );
}
