import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center grap-6 py-24
                    text-center md:py-32">
      <Hero />
    </div>
  );
}
