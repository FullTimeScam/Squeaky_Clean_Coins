import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const ResponseSection = () => {
  return (
    <Section id="response" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="relative space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient-pink glow-purple">
            🚨 내 코인! 내!! 코인!!
          </h2>
          <p className="text-2xl text-muted-foreground">
            해킹사고 발생 시 골든타임 대응
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <Card className="bg-card/50 border-destructive/50 p-6 space-y-4 hover:shadow-[0_0_30px_hsl(var(--destructive)/0.3)] transition-all duration-300">
            <div className="text-4xl">🩸</div>
            <h3 className="text-2xl font-bold text-destructive">피를 멈춰라</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ 토큰 승인 취소</li>
              <li>✓ 새 지갑 생성</li>
              <li>✓ CEX 인출 차단</li>
              <li>✓ 2FA 재설정</li>
            </ul>
          </Card>

          <Card className="bg-card/50 border-primary/50 p-6 space-y-4 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
            <div className="text-4xl">📸</div>
            <h3 className="text-2xl font-bold text-primary">모든 것을 기록</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ TxID 확보</li>
              <li>✓ 지갑 주소</li>
              <li>✓ 스크린샷</li>
              <li>✓ 해킹 경로</li>
            </ul>
          </Card>

          <Card className="bg-card/50 border-secondary/50 p-6 space-y-4 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)] transition-all duration-300">
            <div className="text-4xl">📢</div>
            <h3 className="text-2xl font-bold text-secondary">동네방네 알려라</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ CEX 신고</li>
              <li>✓ 주소 플래그</li>
              <li>✓ 실시간 추적</li>
              <li>✓ 경찰 신고</li>
            </ul>
          </Card>
        </div>

        <div className="pt-8 space-y-4">
          <Card className="bg-card/30 border-accent/50 p-6">
            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-bold text-accent">🏦 최후의 보루: On/Off Ramp</h3>
              <p className="text-lg text-foreground/80">
                DeFi는 못 막아도, 현금화(CEX)는 막을 수 있다
              </p>
              <p className="text-sm text-muted-foreground">
                출금은 '은행 수준' 규제 · 자금 출처 증명 필수
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center pt-4">
          <div className="inline-block border-gradient rounded-xl px-6 py-3">
            <p className="text-base font-mono text-primary">
              "해커는 40분 만에 끝내지만, 복구는 몇 달이 걸린다"
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
