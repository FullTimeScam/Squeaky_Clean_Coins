import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const RailgunSection = () => {
  return (
    <Section id="railgun" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="relative space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient glow-cyan">
            🚆 어둠의 9와 3/4 승강장
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-foreground/80">
            Railgun
          </p>
          <p className="text-xl text-muted-foreground">
            프라이버시 프로토콜
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <Card className="bg-card/50 border-primary/30 p-6 space-y-3 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
            <div className="text-3xl">🔐</div>
            <h3 className="text-xl font-bold text-primary">Shield</h3>
            <p className="text-sm text-muted-foreground">
              입금 → 비밀 계좌
            </p>
            <p className="text-sm text-muted-foreground">
              암호화된 UTXO
            </p>
          </Card>

          <Card className="bg-card/50 border-secondary/30 p-6 space-y-3 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)] transition-all duration-300">
            <div className="text-3xl">⚡</div>
            <h3 className="text-xl font-bold text-secondary">Transact</h3>
            <p className="text-sm text-muted-foreground">
              익명 내부 전송
            </p>
            <p className="text-sm text-muted-foreground">
              zk-SNARKs 증명
            </p>
          </Card>

          <Card className="bg-card/50 border-accent/30 p-6 space-y-3 hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] transition-all duration-300">
            <div className="text-3xl">🚪</div>
            <h3 className="text-xl font-bold text-accent">Unshield</h3>
            <p className="text-sm text-muted-foreground">
              새 지갑으로 출금
            </p>
            <p className="text-sm text-muted-foreground">
              추적 고리 단절
            </p>
          </Card>
        </div>

        <div className="pt-8 space-y-4">
          <Card className="bg-card/30 border-primary/50 p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🛡️</div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">POI (Private Proofs of Innocence)</h3>
                <p className="text-lg text-muted-foreground">
                  블랙리스트 검사 · 직접 입금 차단 성공 (zkLend, Inferno Drainer)
                </p>
                <p className="text-sm text-destructive">
                  ⚠️ 허점: 1회용 지갑 + DEX 스왑 우회는 여전히 가능
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
