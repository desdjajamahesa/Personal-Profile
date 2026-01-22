import Image from "next/image";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import MusicParticles from "../animations/MusicParticles";

export default function Home() {
  return (
    <section id="overture" className="relative min-h-screen w-full flex items-center justify-start bg-charcoal overflow-hidden">
      <MusicParticles />

      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[900px] h-[100vh] opacity-20 pointer-events-none z-10"
        style={{
          background: "conic-gradient(from 180deg at 50% 0%, rgba(255,253,240,0.5) 0deg, transparent 40deg, transparent 320deg, rgba(255,253,240,0.5) 360deg)",
          filter: "blur(80px)",
        }}
      />

      <Image src="/images/musical-notes.png" alt="Musical Notes" fill priority className="object-cover opacity-20 pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_80%,transparent_100%)]" />

      <div className="absolute bottom-0 right-0 w-[45vw] h-[45vw] max-w-[750px] max-h-[750px] z-10 pointer-events-none transition-all duration-500">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/conductor-silhouette.png"
            alt="Conductor Shadow"
            fill
            sizes="(max-width: 1366px) 45vw, 750px"
            className="
              object-contain object-bottom 
              -scale-x-100 
              -translate-x-3 -translate-y-1 
              brightness-[2] sepia-[0.5] saturate-[0.5] 
              opacity-60 blur-[1px]
            "
          />
        </div>

        <div className="absolute inset-0 z-10">
          <Image
            src="/images/conductor-silhouette.png"
            alt="Conductor Silhouette"
            fill
            sizes="(max-width: 1366px) 45vw, 750px"
            className="
              object-contain object-bottom 
              -scale-x-100 
              opacity-80
              [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]
            "
          />
        </div>
      </div>

      <div className="container mx-auto h-full flex items-center px-8 md:px-16 lg:px-20 z-20">
        <GlassCard className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl transition-all duration-300">
          <h2 className="text-bright-cream font-cinzel text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-4 font-bold leading-tight">THE ARCHITECT OF DIGITAL SYMPHONIES</h2>
          <p className="text-cream/70 font-julee leading-relaxed mb-6 text-sm md:text-base 2xl:text-lg text-justify">
            A great performance is not just about the notes, but how they are orchestrated. I conduct modern technologies into a seamless digital experience, ensuring every line of code plays its part in perfect harmony.
          </p>

          <div className="flex flex-col gap-4 mt-2 transition-all duration-300">
            <Button variant="primary" className="w-full sm:w-[240px] xl:w-[280px] 2xl:w-[320px] py-3 2xl:py-4 text-sm xl:text-base 2xl:text-lg">
              Let's Harmonize!
            </Button>
            <Button variant="secondary" className="w-full sm:w-[240px] xl:w-[280px] 2xl:w-[320px] py-3 2xl:py-4 text-sm xl:text-base 2xl:text-lg">
              Enter the Concert Hall
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
