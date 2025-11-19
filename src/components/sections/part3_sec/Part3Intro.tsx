import { Section } from "@/components/Section";

export const Part3Intro = () => {
  return (
    <Section id="page01" className="relative">
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 배경 효과: 안전함을 상징하는 녹색/청록색 틴트 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-background to-background z-0" />
        
        <div className="relative z-10 space-y-8 max-w-5xl">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-mono text-emerald-400 animate-pulse">
              Part 3. Security & Compliance
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight glow-text">
              Compliant<br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Privacy
              </span>
            </h1>
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            "해커의 자금 세탁은 막고,<br />
            선의의 사용자는 보호한다."
          </p>

          <div className="flex justify-center gap-8 mt-12">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-red-500/30 bg-red-950/20 text-red-400">
              <span className="text-xl">🚫</span> Bad Actors Blocked
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400">
              <span className="text-xl">✅</span> Honest Users Only
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};