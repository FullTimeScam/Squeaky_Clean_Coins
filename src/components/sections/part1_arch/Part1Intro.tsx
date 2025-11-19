import { Section } from "@/components/Section";

export const Part1Intro = () => {
  return (
    <Section id="page01" className="relative">
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        
        <div className="relative z-10 space-y-8 max-w-5xl">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-mono text-primary animate-pulse">
              Part 1. Core Architecture
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight glow-text">
              RAILGUN<br />
              <span className="text-gradient">Architecture</span>
            </h1>
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            이더리움의 <span className="text-foreground font-bold">Account 모델</span> 위에서<br />
            어떻게 완벽한 <span className="text-foreground font-bold">UTXO 프라이버시</span>를 구현했는가?
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 opacity-80">
            <div className="p-4 border border-white/10 rounded-lg bg-black/40">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-mono text-sm">zk-SNARKs</div>
            </div>
            <div className="p-4 border border-white/10 rounded-lg bg-black/40">
              <div className="text-3xl mb-2">🌲</div>
              <div className="font-mono text-sm">Merkle Tree</div>
            </div>
            <div className="p-4 border border-white/10 rounded-lg bg-black/40">
              <div className="text-3xl mb-2">🧾</div>
              <div className="font-mono text-sm">UTXO Model</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};