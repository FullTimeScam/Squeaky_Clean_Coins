import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import { ImageModal } from "../ImageModal";

export const Page08_Phase3 = () => {
  return (
    <Section id="page08" className="relative">
      <div className="relative space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            타임라인 Phase 3: 스왑
          </h2>
        </div>

        {/* --- 2x2 Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 items-stretch">
          
          {/* Quadrant 2 (Top-Left): Text Content */}
          <Card className="bg-card/50 border-secondary/30 p-8 space-y-6 md:col-start-1 md:row-start-1">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🔄</div>
              <div>
                <h3 className="text-2xl font-bold text-secondary">Phase 3: 자금 스왑</h3>
                <p className="text-sm text-muted-foreground">2025-09-02 (2분 완료)</p>
              </div>
            </div>

            <div className="space-y-4 pl-14">
              <p className="text-xl text-foreground/90">
                "14일 후, 해커가 다시 움직입니다. SOL을 '스테이블 코인'으로 바꿉니다"
              </p>

              <div className="space-y-2 text-base text-muted-foreground">
                <p>• 18:51 → 1 SOL → <span className="text-foreground">204.9 USDC</span></p>
                <p>• 18:52 → 38 SOL → <span className="text-foreground">7,793 USDT</span></p>
                <p>• 18:53 → 29 SOL → <span className="text-foreground">5,948 USDT</span></p>
                <p className="pt-2 text-secondary font-semibold">총 ~$13,741 USDT + $204 USDC 변환</p>
              </div>
            </div>
          </Card>

          {/* Quadrant 1 (Top-Right): Image 1 */}
          <Card className="bg-card/50 border-border/30 p-4 md:col-start-2 md:row-start-1 flex items-center justify-center">
            <ImageModal
              src="/img/phase3-1-trace.png"
              alt="Phase 3-1 추적 이미지"
              className="rounded-lg w-full h-full object-cover"
            />
          </Card>

          {/* Quadrant 3 (Bottom-Left): Image 2 */}
          <Card className="bg-card/50 border-border/30 p-4 md:col-start-1 md:row-start-2 flex items-center justify-center">
            <ImageModal
              src="/img/phase3-2-trace.png"
              alt="Phase 3-2 추적 이미지"
              className="rounded-lg w-full h-full object-cover"
            />
          </Card>

          {/* Quadrant 4 (Bottom-Right): Image 3 */}
          <Card className="bg-card/50 border-border/30 p-4 md:col-start-2 md:row-start-2 flex items-center justify-center">
            <ImageModal
              src="/img/phase3-3-trace.png"
              alt="Phase 3-3 추적 이미지"
              className="rounded-lg w-full h-full object-cover"
            />
          </Card>

        </div>
        {/* --- End 2x2 Grid --- */}

      </div>
    </Section>
  );
};