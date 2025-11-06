import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const Page12RailgunPOI = () => {
  return (
    <Section id="page12" className="relative">
      <div className="relative space-y-12 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            레일건의 반격
          </h2>
          <p className="text-xl text-muted-foreground">
            Private Proofs of Innocence (POI)
          </p>
        </div>

        <Card className="bg-card/50 border-primary/30 p-10 space-y-6 card-glow">
          <div className="text-center space-y-4">
            <div className="text-5xl">🛡️</div>
            <h3 className="text-3xl font-bold text-primary">
              "우리도 블랙리스트 검사한다!"
            </h3>
            <p className="text-lg text-muted-foreground">
              (단, 프라이버시를 지키면서)
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">작동 방식</h4>
                <p className="text-sm text-muted-foreground">
                  Shield() 호출 시 1시간 대기 → zk 증명 생성 → 블랙리스트 검사<br />
                  블랙리스트에 있으면 <span className="text-destructive">입금 거부!</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🎉</div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">성공 사례</h4>
                <p className="text-sm text-muted-foreground">
                  2024-10: zkLend ($9.5M) - <span className="text-primary">차단 성공!</span><br />
                  2024-08: Inferno Drainer - <span className="text-primary">차단 성공!</span>
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-card/50 border-destructive/30 p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⚠️</div>
            <h3 className="text-2xl font-bold text-destructive">치명적 허점</h3>
          </div>

          <div className="space-y-4 pl-14">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">① 고정형 블랙리스트</h4>
              <p className="text-sm text-muted-foreground">
                방금 만든 '신상' 1회용 지갑은 리스트에 없음
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">② '현재'만 검사</h4>
              <p className="text-sm text-muted-foreground">
                입금하는 지갑(B)만 보고, 그 '전' 지갑(A)은 신경 안 씀<br />
                <span className="text-destructive">(Provenance 미검증)</span>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">③ '세탁 후' 입금</h4>
              <p className="text-sm text-muted-foreground">
                A (해커) → DEX 스왑 → 브리지 → B (새 지갑) → 레일건<br />
                <span className="text-destructive">→ POI는 속수무책</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};
