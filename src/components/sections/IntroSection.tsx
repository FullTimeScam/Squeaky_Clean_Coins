import { Section } from "../Section";

export const IntroSection = () => {
  return (
    <Section id="intro" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      <div className="relative space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient glow-cyan">
            💸 깨끗한 코인!
          </h1>
          <p className="text-3xl md:text-4xl text-gradient-pink font-semibold">
            뽀득 뽀득
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground">
            최신 콤-퓨타 세탁 합니다
          </p>
        </div>

        <div className="pt-8 space-y-4">
          <p className="text-2xl md:text-3xl font-light text-foreground/90">
            최신 크립토 자금세탁 기법 파훼와
          </p>
          <p className="text-2xl md:text-3xl font-light text-foreground/90">
            골든타임 대응법
          </p>
        </div>

        <div className="pt-12">
          <div className="inline-block border-gradient rounded-2xl px-8 py-4">
            <p className="text-lg text-primary font-mono">
              "블록체인에 기록된 것은 사라지지 않습니다"
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
