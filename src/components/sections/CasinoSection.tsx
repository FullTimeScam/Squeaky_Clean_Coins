import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const CasinoSection = () => {
  return (
    <Section id="casino" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="relative space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient-pink glow-purple">
            🎰 잭팟인 줄 알았지?
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground/80">
            세탁기였어!
          </p>
          <p className="text-xl text-muted-foreground">
            KYC 없는 크립토 카지노
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-8">
          <Card className="bg-card/50 border-primary/30 p-8 space-y-4 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="text-2xl font-bold text-primary">세탁 방식</h3>
            <ul className="space-y-2 text-lg text-muted-foreground">
              <li>• 입금 → 칩 전환</li>
              <li>• 짧은 플레이 (위장)</li>
              <li>• 분할 · 교환 출금</li>
              <li>• 다른 체인으로 탈출</li>
            </ul>
          </Card>

          <Card className="bg-card/50 border-secondary/30 p-8 space-y-4 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)] transition-all duration-300">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-2xl font-bold text-secondary">실제 사례</h3>
            <ul className="space-y-2 text-lg text-muted-foreground">
              <li>• 피해액: ~$22,000</li>
              <li>• 경로: Bybit → BC.Game</li>
              <li>• 기간: 24일 (3단계 경유)</li>
              <li>• 기법: Slow-Burn</li>
            </ul>
          </Card>
        </div>

        <div className="pt-8 text-center">
          <div className="inline-block border-gradient rounded-xl px-6 py-3">
            <p className="text-lg font-mono text-accent">
              "입금 → 즉시 출금 = Smoking Gun 🔫"
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
