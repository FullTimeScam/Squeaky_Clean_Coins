import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import { ImageModal } from "../ImageModal";

export const Page09_Phase4_5 = () => {
  return (
    <Section id="page09" className="relative">
      <div className="relative space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            타임라인 Phase 4-5: 세탁
          </h2>
        </div>

        {/* --- Text Card (Full Width Top) --- */}
        <Card className="bg-card/50 border-primary/30 p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📦</div>
            <div>
              <h3 className="text-2xl font-bold text-primary">Phase 4-5: 집결 & 최종 세탁</h3>
              <p className="text-sm text-muted-foreground">2025-09-11 ~ 09-12</p>
            </div>
          </div>

          <div className="space-y-4 pl-14">
            <p className="text-xl text-foreground/90">
              "지갑 C로 모든 자금 집결 → 즉시 BC.Game 입금"
            </p>

            <div className="space-y-2 text-base text-muted-foreground">
              <p>• 15:54 (09-11) → <span className="text-foreground">2.77 SOL</span> BC.Game 입금 (받은 지 4분만)</p>
              <p>• 16:23 (09-11) → <span className="text-foreground">$13,741 USDT</span> 전액 입금</p>
              <p>• 01:32 (09-12) → <span className="text-foreground">$204 USDC</span> 전액 입금</p>
              <p className="pt-2 text-destructive font-semibold">🔫 Smoking Gun: 받자마자 즉시 출금</p>
            </div>
          </div>
        </Card>

        {/* --- Image Cards (Bottom Row) --- */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="bg-card/50 border-border/30 p-4">
            <ImageModal
              src="/img/phase4-trace.png"
              alt="Phase 4-5 (1) 추적 이미지"
              className="rounded-lg w-full h-full object-cover"
            />
          </Card>
          <Card className="bg-card/50 border-border/30 p-4">
            <ImageModal
              src="/img/phase5-trace.png"
              alt="Phase 4-5 (2) 추적 이미지"
              className="rounded-lg w-full h-full object-cover"
            />
          </Card>
        </div>

      </div>
    </Section>
  );
};