import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const Page16ResponseTrack = () => {
  return (
    <Section id="page16" className="relative">
      <div className="relative space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            동네방네 알려라!
          </h2>
          <p className="text-xl text-muted-foreground">
            Reporting & Tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card/50 border-secondary/30 p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🏦</div>
              <h3 className="text-2xl font-bold text-secondary">CEX로 갔다면?</h3>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground pl-14">
              <p>• 해당 CEX에 '도난 자금 신고' 즉시 제출</p>
              <p>• KYC 적용 거래소라면 계정 동결 가능</p>
              <p className="text-secondary pt-2">→ Best Case!</p>
            </div>
          </Card>

          <Card className="bg-card/50 border-accent/30 p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">⛓️</div>
              <h3 className="text-2xl font-bold text-accent">온체인에 있다면?</h3>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground pl-14">
              <p>• Etherscan 'Report/Flag Address' 신고</p>
              <p>• Watchlist 알림 설정 (실시간 모니터링)</p>
              <p className="text-accent pt-2">→ CEX 이동 시 즉시 포착</p>
            </div>
          </Card>
        </div>

        <Card className="bg-card/50 border-destructive/30 p-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🕵️</div>
            <h3 className="text-2xl font-bold text-destructive">수사 기관 접수 (필수!)</h3>
          </div>
          <p className="text-lg text-foreground/90 pl-14 leading-relaxed">
            모든 증거 자료를 취합해 <span className="text-destructive font-bold">경찰청 사이버수사국(ECRM)</span> 신고<br />
            → <span className="text-primary">'사건사고 사실확인원'</span> 발급<br />
            → 이게 있어야 CEX가 협조해줌
          </p>
        </Card>

        <Card className="bg-card/50 border-primary/50 p-10 space-y-6 card-glow">
          <div className="text-center space-y-4">
            <div className="text-5xl">🏦</div>
            <h3 className="text-3xl font-bold text-primary">최후의 보루: On/Off Ramp</h3>
          </div>

          <div className="space-y-4 pt-6">
            <p className="text-xl text-center text-foreground/90">
              DeFi는 못 막아도, <span className="text-primary font-bold">현금화(CEX)는 막을 수 있다</span>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-foreground">❌ DeFi 프로토콜</h4>
                <p className="text-sm text-muted-foreground">
                  관리자 없음 → 자산 동결 불가<br />
                  규제의 모호함 (VASP?)<br />
                  기술적 한계
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-foreground">✅ CASP (CEX)</h4>
                <p className="text-sm text-muted-foreground">
                  은행 수준 규제 강화<br />
                  <span className="text-primary">자금 출처 증명 필수</span><br />
                  신고 시 현금화 차단 가능
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};
