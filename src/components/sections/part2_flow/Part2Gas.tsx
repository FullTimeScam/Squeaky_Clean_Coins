import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part2Gas = () => {
  return (
    <Section id="page04" className="relative">
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          
          {/* 텍스트 설명 */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-accent">Economic Incentive</span><br />
              (Swap & Pay)
            </h2>
            <p className="text-lg text-muted-foreground">
              릴레이어는 자선사업가가 아닙니다.<br/>
              그들은 <span className="text-white font-bold">수수료 차익</span>을 위해 움직입니다.
            </p>
            
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">1.</span>
                <span>사용자는 전송하려는 토큰(예: DAI)의 일부를 수수료로 지불하겠다고 서명합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">2.</span>
                <span>릴레이어는 이 제안을 받고, 가스비(ETH)를 먼저 지불하여 트랜잭션을 실행합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">3.</span>
                <span>레일건 컨트랙트는 내부적으로 릴레이어에게 약속된 DAI를 지급합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">4.</span>
                <span>결과: 사용자는 ETH 없이 DAI만으로 송금 완료.</span>
              </li>
            </ul>
          </div>

          {/* 시각화 카드 */}
          <div className="flex-1 w-full">
            <Card className="p-8 bg-card/50 border-accent/30 card-glow">
              <div className="flex justify-between items-center text-center font-mono text-sm mb-8">
                <div>
                  <div className="text-2xl mb-2">👤</div>
                  <div className="text-gray-400">User</div>
                  <div className="text-red-400 font-bold">-105 DAI</div>
                </div>
                <div className="text-xl text-gray-600">➡️</div>
                <div>
                  <div className="text-2xl mb-2">📜</div>
                  <div className="text-accent">Contract</div>
                  <div className="text-xs text-gray-500">Swap Logic</div>
                </div>
                <div className="text-xl text-gray-600">➡️</div>
                <div>
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-gray-400">Relayer</div>
                  <div className="text-green-400 font-bold">+5 DAI</div>
                </div>
              </div>

              <div className="p-4 bg-black/50 rounded border border-white/5 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Gas Cost (Paid by Relayer):</span>
                  <span className="text-white">0.01 ETH ($100)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fee from User:</span>
                  <span className="text-white">105 DAI ($105)</span>
                </div>
                <div className="border-t border-gray-700 my-2 pt-2 flex justify-between font-bold">
                  <span className="text-accent">Relayer Profit:</span>
                  <span className="text-accent">$5</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};