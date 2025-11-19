import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part3POI = () => {
  return (
    <Section id="page02" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Proof of <span className="text-emerald-400">Innocence</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            거래 내역을 공개하지 않고도, 자금이 깨끗함을 증명합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* 왼쪽: 문제 제기 */}
          <Card className="p-8 bg-card/40 border-red-900/50 flex flex-col justify-center min-h-[300px]">
            <h3 className="text-2xl font-bold text-red-400 mb-4">The Challenge</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              "만약 북한 해커가 레일건을 사용한다면?"
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>❌ 기존 믹서(Tornado Cash)는 무차별적으로 섞음</li>
              <li>❌ 규제 당국의 제재 대상이 됨</li>
              <li>❌ 일반 사용자까지 범죄자 취급 위험</li>
            </ul>
          </Card>

          {/* 오른쪽: 해결책 (POI) */}
          <Card className="p-8 bg-emerald-950/10 border-emerald-500/50 min-h-[300px] card-glow">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">POI Solution</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              수학적 증명(ZK)을 통해 다음을 보장합니다:
            </p>
            <div className="p-4 bg-black/60 rounded-lg border border-emerald-500/20 font-mono text-sm text-emerald-200 mb-4">
              "My funds are NOT from the list of known bad actors."
            </div>
            <p className="text-sm text-gray-400">
              사용자는 자신의 거래 기록을 공개하지 않으면서도,<br/>
              블랙리스트 지갑과의 <b>'비연결성(Non-membership)'</b>을 증명합니다.
            </p>
          </Card>

        </div>
      </div>
    </Section>
  );
};