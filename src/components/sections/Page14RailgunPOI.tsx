import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const Page14RailgunPOI = () => {
  return (
    <Section id="page14" className="relative">
      <div className="relative space-y-12 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            POI 도입과 현재의 사각지대
          </h2>
          <p className="text-xl text-muted-foreground">
            POI(PPI) 도입으로 세탁의 흐름이 바뀌었습니다.
          </p>
        </div>

        {/* 1. POI 도입 */}
        <Card className="bg-card/50 border-primary/30 p-10 space-y-6 card-glow">
          <div className="text-center space-y-4">
            <div className="text-5xl">🛡️</div>
            <h3 className="text-3xl font-bold text-primary">
              "우리도 블랙리스트 검사한다!"
            </h3>
            <p className="text-lg text-muted-foreground">
              (Private Proofs of Innocence)
            </p>
          </div>
          <p className="text-lg text-center text-muted-foreground">
            Shield() 호출 시 1시간 대기 → 입금 주소가 블랙리스트에 있으면 <span className="text-destructive">입금 거부!</span>
          </p>
        </Card>

        {/* 2. POI로 인한 차단 사례 */}
        <Card className="bg-card/50 border-secondary/30 p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🎉</div>
            <h3 className="text-2xl font-bold text-secondary">변화: POI 차단 성공</h3>
          </div>
          <div className="space-y-4 pl-14">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">차단 사례 (2024)</h4>
              <p className="text-sm text-muted-foreground">
                • 2024-10: zkLend ($9.5M) - <span className="text-secondary font-bold">차단 성공!</span><br />
                • 2024-08: Inferno Drainer - <span className="text-secondary font-bold">차단 성공!</span>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">이유</h4>
              <p className="text-sm text-muted-foreground">
                해커가 훔친 자금을 <span className="text-destructive">‘직접’ Shield 시도.</span><br />
                POI가 "블랙리스트와 연관성 없음"을 ZK로 증명하지 못해 입금 거부.
              </p>
            </div>
          </div>
        </Card>

        {/* 3. 남은 사각지대 */}
        <Card className="bg-card/50 border-destructive/30 p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⚠️</div>
            <h3 className="text-2xl font-bold text-destructive">현재: 여전히 남은 사각지대</h3>
          </div>

          <div className="space-y-4 pl-14">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">우회 패턴</h4>
              <p className="text-sm text-muted-foreground">
                <span className="text-destructive font-bold">다중 홉 + DEX 스왑 + 브리지 + ‘깨끗한’ EOA 조합</span>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-2">결과</h4>
              <p className="text-sm text-muted-foreground">
                온체인 인과관계가 희석되어 POI의 리스트 기반 매칭으로는 탐지·차단이 어려움.
              </p>
            </div>
          </div>
        </Card>

        {/* 4. 요약 */}
        <Card className="bg-card/30 border-primary/50 p-8 mt-8">
          <h4 className="text-xl font-bold text-center text-primary mb-4">3단계 흐름</h4>
          <ul className="space-y-2 text-center text-foreground/90">
            <li><span className="font-bold text-destructive">초기:</span> Railgun만으로도 세탁 성공 (Lazarus)</li>
            <li><span className="font-bold text-secondary">이후:</span> PPI 도입으로 많은 '직접 입금' 시도 차단 (zkLend)</li>
            <li><span className="font-bold text-primary">현재:</span> 다중 홉 + DeFi 조합은 여전히 유효한 우회 경로</li>
          </ul>
        </Card>

      </div>
    </Section>
  );
};