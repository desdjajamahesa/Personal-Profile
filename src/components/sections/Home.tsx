import Image from "next/image";
import Hero from "./Hero";
import About from "./About";
import Repertoire from "./Repertoire";
import Concert from "./Concert";
import Encore from "./Encore";
import Footer from "../ui/Footer";
import MusicParticles from "../animations/MusicParticles";

export default function Home() {
  return (
    <main className="bg-charcoal relative min-h-screen w-full">
      <MusicParticles />

      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Image
          src="/images/musical-notes.png"
          alt="Global Musical Notes"
          fill
          priority
          unoptimized // Menghindari beban proses optimasi di RAM 4GB
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-60" />
      </div>

      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Repertoire />
        <Concert />
        <Encore />
        <Footer />
      </div>
    </main>
  );
}
