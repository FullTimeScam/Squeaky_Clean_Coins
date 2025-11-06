import { Section } from "../Section";

export const Page01Intro = () => {
  return (
    <Section id="page01" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative space-y-12 text-center">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-bold text-gradient glow-text leading-tight">
            💸 코인 세탁소
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-reverse">
            특급 레시피?
          </h2>
          <p className="text-2xl md:text-3xl text-foreground/70 font-light">
            (feat. 잡았다 요놈!)
          </p>
        </div>

        <div className="pt-12 space-y-6 max-w-4xl mx-auto">
          <p className="text-3xl md:text-4xl font-light text-foreground/90">
            최신 크립토 자금세탁 기법 파훼와
          </p>
          <p className="text-3xl md:text-4xl font-light text-foreground/90">
            골든타임 대응법
          </p>
        </div>
      </div>
    </Section>
  );
};
