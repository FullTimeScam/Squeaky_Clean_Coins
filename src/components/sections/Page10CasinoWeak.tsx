import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const Page10CasinoWeak = () => {
  return (
    <Section id="page10" className="relative">
      <div className="relative space-y-12 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            "그럼에도 잡을 수 있다"
          </h2>
          <p className="text-xl text-muted-foreground">
            단서, 추적, 그리고 공조
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-destructive/30 p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🎯</div>
              <h3 className="text-3xl font-bold text-destructive">1. 결정적 단서 (The Smoking Gun)</h3>
            </div>

            <div className="space-y-6 pl-14">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">① 경유지 지갑의 행태 (Wallet C)</h4>
                <p className="text-base text-muted-foreground">
                  중개 지갑 C (<code className="text-sm text-destructive/80">4Rt5PD...JCM</code>)는 자금 수령 직전에 생성되었습니다.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                  이 지갑의 유일한 목적은 지갑 B에서 스왑된 자산(USDT, USDC, SOL)을 <span className="text-destructive font-bold">집결</span>시킨 뒤, <span className="text-destructive font-bold">즉시 전액</span>을 BC.Game으로 보내는 것이었습니다.
                </p>
                 <p className="text-base text-muted-foreground mt-2">
                  → '집결 → 즉시 전량 이체' 패턴은 개인 사용자가 아닌, 자금 세탁을 위한 <span className="text-destructive font-bold">일회용 경유지</span>의 전형적인 특징입니다.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">② 명확한 자금 흐름</h4>
                <p className="text-base text-muted-foreground">
                  자금은 <code className="text-sm text-foreground/80">Bybit (출금)</code> → <code className="text-sm text-foreground/80">피해자 지갑</code> → <code className="text-sm text-foreground/80">지갑 A (GUDJNJ...)</code> → <code className="text-sm text-foreground/80">지갑 B (ZuT1V4...)</code> → <code className="text-sm text-foreground/80">지갑 C (4Rt5PD...)</code> → <code className="text-sm text-foreground/80">BC.Game (97UQvP...)</code>로 이동했습니다.
                </p>
                 <p className="text-base text-muted-foreground mt-2">
                  → 추적의 고리가 단 한 번도 끊기지 않았습니다.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 border-primary/30 p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🤝</div>
              <h3 className="text-3xl font-bold text-primary">2. 추적과 공조 (The Method)</h3>
            </div>

            <div className="space-y-6 pl-14">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">① On/Off Ramp 공조</h4>
                <p className="text-base text-muted-foreground">
                  이 사건은 <span className="text-primary font-bold">Bybit(시작점)</span>과 <span className="text-primary font-bold">BC.Game(종착점)</span>이라는 두 개의 식별 가능한 주체를 포함합니다.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                  → <span className="text-primary">BC.Game</span> 측에 자금 동결 및 계정 정보 (IP, 기기 정보)를 요청하는 것이 핵심입니다.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">② 법적 근거 확보</h4>
                <p className="text-base text-muted-foreground">
                  피해자는 즉시 경찰 신고를 준비했습니다.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                  → <span className="text-foreground/80">'사건사고 사실확인원'</span> 등 법적 문서는 CEX(거래소)나 서비스가 협조할 수 있는 유일한 근거입니다. Bybit와 BC.Game 모두 이 문서가 있어야만 실제 조치(계정 정지, 정보 제공)가 가능합니다.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};