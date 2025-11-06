import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const Page05CasinoCase = () => {
  return (
    <Section id="page05" className="relative">
      <div className="relative space-y-12 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            실제 사례
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            "한 투자자의 지갑이 털렸습니다"
          </p>
          <p className="text-lg text-foreground/60">
            2025년 8~9월, 실제 온체인 포렌식
          </p>
        </div>

        <Card className="bg-card/50 border-destructive/30 p-10 space-y-6 card-glow">
          <div className="text-center space-y-4">
            <div className="text-5xl">🚨</div>
            <h3 className="text-3xl font-bold text-destructive">
              Operation 'Slow-Burn' Casino Run
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <p className="text-sm text-muted-foreground">피해 규모</p>
                  <p className="text-xl font-bold text-foreground">~$24,000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="text-sm text-muted-foreground">공격 기간</p>
                  <p className="text-xl font-bold text-foreground">24일</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-sm text-muted-foreground">경로</p>
                  <p className="text-xl font-bold text-foreground">Bybit → BC.Game</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔐</span>
                <div>
                  <p className="text-sm text-muted-foreground">침투 방식</p>
                  <p className="text-xl font-bold text-foreground">2FA 하이재킹</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};
