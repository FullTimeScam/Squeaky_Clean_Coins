import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const Page16ResponseImmediate = () => {
  return (
    <Section id="page16" className="relative">
      <div className="relative space-y-12 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient glow-text">
            🚨 내 코인! 내!! 코인!!
          </h2>
          <p className="text-2xl text-muted-foreground">
            "멘탈 나간 거 압니다. 하지만 이것만은 지금 당장 하세요"
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-destructive/50 p-10 space-y-6 card-glow">
            <div className="text-center">
              <div className="text-6xl mb-4">🩸</div>
              <h3 className="text-3xl font-bold text-destructive">피를 멈춰라!</h3>
              <p className="text-lg text-muted-foreground">Stop the Bleeding</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-3">
                <div className="text-3xl">🔓</div>
                <h4 className="text-lg font-bold text-foreground">가스 밸브 잠그기</h4>
                <p className="text-sm text-muted-foreground">
                  revoke.cash에서<br />
                  모든 토큰 승인 취소
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-3xl">🏠</div>
                <h4 className="text-lg font-bold text-foreground">새 집으로 이사</h4>
                <p className="text-sm text-muted-foreground">
                  새 지갑 생성 후<br />
                  남은 자산 즉시 이동
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-3xl">🚪</div>
                <h4 className="text-lg font-bold text-foreground">현관문 잠그기</h4>
                <p className="text-sm text-muted-foreground">
                  CEX 인출 차단<br />
                  API 키 삭제, 2FA 재설정
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 border-primary/50 p-10 space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-3xl font-bold text-primary">모든 것을 기록하라!</h3>
              <p className="text-lg text-muted-foreground">Document Everything</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground">필수 확보 (객관적)</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ 트랜잭션 해시 (TxID)</li>
                  <li>✓ 공격자 지갑 주소</li>
                  <li>✓ 모든 중개 주소</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground">즉시 확보 (정황)</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✓ 블록 탐색기 스크린샷</li>
                  <li>✓ 피싱 링크 URL</li>
                  <li>✓ 해킹 경로 추정</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
