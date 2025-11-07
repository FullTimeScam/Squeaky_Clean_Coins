import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import { ImageModal } from "../ImageModal";

export const Page06_Phase1 = () => {
  return (
    <Section id="page06" className="relative">
      <div className="relative space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            타임라인 Phase 1: 탈취
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="bg-card/50 border-destructive/30 p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-2xl font-bold text-destructive">Phase 1: 탈취 및 1차 집결</h3>
                <p className="text-sm text-muted-foreground">2025-08-18, 22:18-22:49 UTC</p>
              </div>
            </div>

            <div className="space-y-4 pl-14">
              <p className="text-xl text-foreground/90">
                "모든 것은 <span className="text-destructive font-bold">30분</span> 만에 일어났습니다"
              </p>

              <div className="space-y-3 text-base text-muted-foreground">
                <p>• 22:18 → 지갑 A로 <span className="text-foreground">83.5 SOL</span> 입금</p>
                <p>• 22:38 → 지갑 A로 <span className="text-foreground">27.5 SOL</span> 추가</p>
                <p>• 22:47 → 지갑 A로 <span className="text-foreground">4.7 SOL</span> 추가</p>
                <p>• 22:49 → SPL 토큰들 전송 완료</p>
                <p className="pt-2 text-primary font-semibold">총 115.7 SOL + 토큰 집결 완료 (총 약 130 SOL)</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card/50 border-border/30 p-4">
            <ImageModal
              src="/img/phase1-trace.png"
              alt="Phase 1 추적 이미지"
              className="rounded-lg"
            />
          </Card>
        </div>
      </div>
    </Section>
  );
};