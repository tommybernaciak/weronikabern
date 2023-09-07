import { Cormorant_Infant } from "next/font/google";

const font = Cormorant_Infant({ weight: "500", subsets: ["latin"] });

export default function About() {
  return (
    <div className={`flex  flex-col items-center ${font.className} `}>
      My name is Weronika Bern and I am a photographer.
    </div>
  );
}
