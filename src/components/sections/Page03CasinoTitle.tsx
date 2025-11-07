import { Section } from "../Section";

export const Page03CasinoTitle = () => {
  return (
    <Section id="page03" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
      
      <div className="relative text-center space-y-12">
        <div className="space-y-8">
          <h2 className="text-8xl md:text-9xl font-bold text-gradient glow-text">
            🎰
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-gradient leading-tight">
            "잭팟인 줄 알았지?<br />
            세탁기였어!"
          </h3>
        </div>

        <div className="pt-8">
          <p className="text-3xl md:text-4xl text-foreground/70 font-light">
            크립토 카지노
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground pt-4">
            "입금은 자유, 출금은... 더 자유?"
          </p>
        </div>
      </div>
    </Section>
  );
};
