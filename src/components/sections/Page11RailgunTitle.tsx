import { Section } from "../Section";

export const Page11RailgunTitle = () => {
  return (
    <Section id="page11" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
      
      <div className="relative text-center space-y-12">
        <div className="space-y-8">
          <h2 className="text-8xl md:text-9xl font-bold text-gradient glow-text">
            🚆
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-gradient leading-tight">
            어둠의 9와 3/4<br />
            승강장: 레일건
          </h3>
        </div>

        <div className="pt-8 space-y-4">
          <p className="text-3xl md:text-4xl text-foreground/70 font-light">
            프라이버시 프로토콜
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground">
            "토네이도 캐시가 '공용 세탁기'였다면,<br />
            레일건은 '개인용 스타일러'입니다"
          </p>
        </div>
      </div>
    </Section>
  );
};
