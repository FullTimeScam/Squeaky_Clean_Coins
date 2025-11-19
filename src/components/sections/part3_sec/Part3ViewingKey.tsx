import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part3ViewingKey = () => {
  return (
    <Section id="page03" className="relative">
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* 시각화: 열쇠와 돋보기 */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 text-[10rem] leading-none text-center">
                🔑
              </div>
              <div className="absolute bottom-0 right-0 text-6xl">
                🔍
              </div>
            </div>
          </div>

          {/* 텍스트 설명 */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Viewing Keys
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "프라이버시는 <span className="text-white font-bold">비밀(Secret)</span>이 아닙니다.<br/>
              <span className="text-white font-bold">선택적 공개(Selective Disclosure)</span>입니다."
            </p>
            
            <div className="space-y-4">
              <Card className="p-6 bg-card/50 border-primary/30 hover:bg-card/80 transition-colors">
                <h4 className="text-lg font-bold text-primary mb-2">Auditing (감사)</h4>
                <p className="text-sm text-gray-400">
                  세무 당국이나 감사 기관에 <b>Viewing Key</b>를 제출하면,<br/>
                  그들은 해당 지갑의 거래 내역만 복호화하여 볼 수 있습니다.
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-primary/30 hover:bg-card/80 transition-colors">
                <h4 className="text-lg font-bold text-primary mb-2">Wallet Connect</h4>
                <p className="text-sm text-gray-400">
                  여러 기기에서 내 잔고를 확인하거나,<br/>
                  특정 dApp에 내 자산 증명을 제출할 때 사용됩니다.
                </p>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};