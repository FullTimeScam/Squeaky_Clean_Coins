import { Section } from "../Section";

export const ClosingSection = () => {
  return (
    <Section id="closing" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 pointer-events-none" />
      
      <div className="relative space-y-12 text-center">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient glow-cyan">
            🎤 마치며
          </h2>
        </div>

        <div className="pt-8 space-y-8 max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed">
            세탁 기술은 계속 발전하지만
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-gradient-pink">
            온체인에 찍힌 발자국은 영원합니다
          </p>
          <p className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed">
            우리는 그 발자국을 읽는 법을 배우고<br />
            허점을 찌를 뿐입니다
          </p>
        </div>

        <div className="pt-12">
          <div className="inline-block border-gradient rounded-2xl px-12 py-6 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300">
            <p className="text-3xl font-bold text-gradient">
              Q&A
            </p>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground italic">
            (아, 물론 "제가 직접 해봤는데..." 식의 질문은 정중히 사양합니다 😊)
          </p>
        </div>
      </div>
    </Section>
  );
};
