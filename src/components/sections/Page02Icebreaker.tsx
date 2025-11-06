import { Section } from "../Section";
import { Card } from "@/components/ui/card";

export const Page02Icebreaker = () => {
  return (
    <Section id="page02" className="relative">
      <div className="relative space-y-16 max-w-5xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient">
            🚀 들어가며
          </h2>
          <p className="text-2xl md:text-3xl text-foreground/80 font-light">
            Ice Breaking
          </p>
        </div>

        <div className="space-y-8 pt-8">
          <Card className="bg-card/50 border-primary/30 p-10 card-glow">
            <p className="text-2xl md:text-3xl text-center text-foreground/90 leading-relaxed">
              "여러분, '검은돈' 하면 뭐가 떠오르시나요?<br />
              스위스 비밀 계좌? 엄청 큰 007 가방?"
            </p>
          </Card>

          <div className="space-y-6 text-center">
            <p className="text-xl md:text-2xl text-foreground/80 font-light">
              이제 시대가 바뀌었습니다.<br />
              요즘 '선수'들은 딸깍 몇 번으로 수천억을 편하게 옮깁니다.
            </p>

            <div className="pt-6">
              <div className="inline-block border-gradient rounded-2xl px-10 py-6">
                <p className="text-xl md:text-2xl font-semibold text-secondary">
                  "하지만 블록체인에 기록된 것은 사라지지 않습니다"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
