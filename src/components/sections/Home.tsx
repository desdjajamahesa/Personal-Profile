import Image from 'next/image';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import MusicParticles from '../animations/MusicParticles';

export default function Home() {
  return (
    <section id="overture" className="relative min-h-screen w-full flex items-center justify-start bg-charcoal overflow-hidden">
      <MusicParticles />
      
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[800px] opacity-20 pointer-events-none z-10"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, rgba(255,253,240,0.5) 0deg, transparent 40deg, transparent 320deg, rgba(255,253,240,0.5) 360deg)',
          filter: 'blur(80px)',
        }}
      />

      <Image
        src="/images/musical-notes.png"
        alt="Musical Notes"
        fill
        priority
        className="object-cover opacity-20 pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_80%,transparent_100%)]"
      />

      <div className="absolute bottom-0 right-0 w-[525px] h-[525px] z-10 pointer-events-none">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/conductor-silhouette.png"
            alt="Conductor Shadow"
            fill
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
            className="
              object-contain object-bottom 
              -scale-x-100 
              opacity-80
              [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]
            "
          />
        </div>
      </div>

      <div className="flex justify-start items-center h-full px-16">
        <GlassCard className="max-w-lg">
          <h2 className="text-bright-cream font-cinzel text-2xl tracking-widest mb-4 font-bold">
            THE ARCHITECT OF DIGITAL SYMPHONIES
          </h2>
          <p className="text-cream/70 font-julee leading-relaxed mb-8">
            A great performance is not just about the notes, but how they are orchestrated. 
            I conduct modern technologies into a seamless digital experience, ensuring every line of code plays its part in perfect harmony.
          </p>

          <div className="flex flex-col gap-4">
            <Button variant="primary" className="w-[45%]">
              Let's Harmonize!
            </Button>
            <Button variant="secondary" className="w-[54%]">
              Enter the Concert Hall
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}