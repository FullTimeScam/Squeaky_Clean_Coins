import { Section } from "@/components/Section";

export const Part2Intro = () => {
  return (
    <Section id="page01" className="relative">
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 배경 효과 (Part 1과 색상 톤을 약간 다르게) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background z-0" />
        
        <div className="relative z-10 space-y-8 max-w-5xl">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-mono text-secondary animate-pulse">
              Part 2. Transaction Flow
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight glow-text">
              RELAYERS<br />
              <span className="text-gradient-reverse">& Gas Abstraction</span>
            </h1>
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            익명성을 깨뜨리는 가장 큰 적,<br />
            <span className="text-foreground font-bold">'가스비(Gas Fee)'</span> 문제를 어떻게 해결했는가?
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 opacity-80">
            <div className="p-4 border border-white/10 rounded-lg bg-black/40">
              <div className="text-3xl mb-2">📡</div>
              <div className="font-mono text-sm">Waku Network</div>
            </div>
            <div className="p-4 border border-white/10 rounded-lg bg-black/40">
              <div className="text-3xl mb-2">⛽</div>
              <div className="font-mono text-sm">Gasless Tx</div>
            </div>
            <div className="p-4 border border-white/10 rounded-lg bg-black/40">
              <div className="text-3xl mb-2">🎭</div>
              <div className="font-mono text-sm">Broadcaster</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};