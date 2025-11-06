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
            트레이드오프 및 허점
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-accent/30 p-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl">💰</div>
              <h3 className="text-2xl font-bold text-accent">해커의 비용</h3>
            </div>
            <p className="text-lg text-foreground/80 pl-14">
              카지노 수수료 + DEX 스왑 수수료 + 전송 수수료<br />
              = <span className="text-accent font-bold">$1,000~2,000 손실</span>
            </p>
          </Card>

          <Card className="bg-card/50 border-primary/30 p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🎯</div>
              <h3 className="text-3xl font-bold text-primary">추적 포인트</h3>
            </div>

            <div className="space-y-6 pl-14">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">① '큰 그림'은 숨길 수 없다</h4>
                <p className="text-base text-muted-foreground">
                  CEX에서 나와서(Out) → 24일 뒤 → 카지노로 들어갔다(In)<br />
                  <span className="text-primary">양 끝에서 좁혀 들어가기</span>
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">② 타이밍 (Smoking Gun 🔫)</h4>
                <p className="text-base text-muted-foreground">
                  지갑 C는 자금을 받자마자 <span className="text-destructive font-bold">단 4분 만에</span> BC.Game으로 전송<br />
                  → 명백한 '세탁 경유지' 증거
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">③ 현실의 벽</h4>
                <p className="text-base text-muted-foreground">
                  해커는 40분 만에 끝냈지만, CEX 답변은 48시간<br />
                  <span className="text-foreground/60">→ '예방'이 최선, '초동 대응'이 차선</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
