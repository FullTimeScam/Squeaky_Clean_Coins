import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import { ImageModal } from "../ImageModal";

export const Page07_Phase2 = () => {
  return (
    <Section id="page07" className="relative">
      <div className="relative space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            타임라인 Phase 2: 쿨오프
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="bg-card/50 border-accent/30 p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">❄️</div>
              <div>
                <h3 className="text-2xl font-bold text-accent">Phase 2: 자금 분산 및 '쿨오프'</h3>
                <p className="text-sm text-muted-foreground">2025-08-19 ~ 09-02 (14일간)</p>
              </div>
            </div>

            <div className="space-y-4 pl-14">
              <p className="text-xl text-foreground/90">
                "해커는 11시간 뒤, 자금을 분산시키고 <span className="text-accent font-bold">14일간</span> 잠적합니다"
              </p>

              <div className="space-y-3 text-base text-muted-foreground">
                <p>• 09:54 (08-19) → 지갑 A → 지갑 B로 <span className="text-foreground">66.1 SOL</span> 이동</p>
                <p>• 지갑 A에는 <span className="text-foreground">49.6 SOL</span> 그대로 보관</p>
                <p className="pt-2 text-accent">→ 추적 툴의 시간 기반 분석 회피</p>
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 border-border/30 p-4">
            <ImageModal
              src="/img/phase2-trace.png"
              alt="Phase 2 추적 이미지"
              className="rounded-lg"
            />
          </Card>
        </div>
      </div>
    </Section>
  );
};