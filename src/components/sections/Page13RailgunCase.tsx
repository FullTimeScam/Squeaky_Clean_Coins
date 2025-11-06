import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const Page13RailgunCase = () => {
  return (
    <Section id="page13" className="relative">
      <div className="relative space-y-12 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            선수 입장! (초기 성공 사례)
          </h2>
          <p className="text-xl text-muted-foreground">
            POI(PPI) 도입 이전, Lazarus 등은 Railgun을 통해 성공적으로 자금을 세탁했습니다.
          </p>
        </div>

        <Card className="bg-card/50 border-destructive/30 p-10 space-y-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-3xl font-bold text-destructive">2023: Lazarus의 전성기 골든타임</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3 text-center">
              <p className="text-sm text-muted-foreground">2023-01</p>
              <p className="text-2xl font-bold text-foreground">Harmony</p>
              <p className="text-xl text-destructive">$60M</p>
              <p className="text-sm text-muted-foreground">41,000 ETH → 레일건</p>
            </div>

            <div className="space-y-3 text-center">
              <p className="text-sm text-muted-foreground">2023-09</p>
              <p className="text-2xl font-bold text-foreground">Stake·CoinEx</p>
              <p className="text-xl text-destructive">$XXM</p>
              <p className="text-sm text-muted-foreground">1,000 ETH 단위 분할</p>
            </div>
            
            <div className="space-y-3 text-center">
              <p className="text-sm text-muted-foreground">2023-11</p>
              <p className="text-2xl font-bold text-foreground">Poloniex</p>
              <p className="text-xl text-destructive">$10M</p>
              <p className="text-sm text-muted-foreground">분할X / 레일건 직행</p>
            </div>

          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-primary/30 p-6 space-y-3">
            <div className="text-3xl">🎯</div>
            <h4 className="text-lg font-bold text-primary">패턴 1</h4>
            <p className="text-sm text-muted-foreground">
              Single-Hop Clean Wallet<br />
              해킹 지갑 → 새 지갑 → 레일건
            </p>
          </Card>

          <Card className="bg-card/50 border-secondary/30 p-6 space-y-3">
            <div className="text-3xl">✂️</div>
            <h4 className="text-lg font-bold text-secondary">패턴 2</h4>
            <p className="text-sm text-muted-foreground">
              분할 Unshield<br />
              10,000 ETH → 100 ETH씩 100개
            </p>
          </Card>

          <Card className="bg-card/50 border-accent/30 p-6 space-y-3">
            <div className="text-3xl">🔄</div>
            <h4 className="text-lg font-bold text-accent">패턴 3</h4>
            <p className="text-sm text-muted-foreground">
              교차 믹싱<br />
              토네이도 → 레일건 → 토네이도
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
};