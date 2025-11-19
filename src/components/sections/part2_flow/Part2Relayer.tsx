import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part2Relayer = () => {
  return (
    <Section id="page02" className="relative">
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* 텍스트 설명 */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              The Relayer Dilemma
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              이더리움에서 트랜잭션을 보내려면<br />
              반드시 <span className="text-white font-bold">ETH로 가스비를 지불</span>해야 합니다.
            </p>
            
            <div className="p-6 border-l-4 border-red-500 bg-red-500/5 rounded-r-lg">
              <h4 className="text-xl font-bold text-red-400 mb-2">The Problem</h4>
              <p className="text-gray-300">
                "아무리 내용을 암호화해도,<br/>
                <span className="text-white">가스비를 내는 지갑(EOA)</span>이 노출되면<br/>
                모든 프라이버시가 무용지물이 됩니다."
              </p>
            </div>

            <p className="text-lg text-gray-400">
              그래서 레일건은 사용자를 대신해 트랜잭션을 블록체인에 제출해주는 
              <span className="text-secondary font-bold ml-2">릴레이어(Relayer)</span>를 사용합니다.
            </p>
          </div>

          {/* 시각화 카드 */}
          <div className="flex-1 w-full">
            <Card className="p-8 bg-black/80 border-white/10 card-glow">
              <div className="space-y-8 relative">
                {/* User */}
                <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gray-900/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">👤</div>
                    <div>
                      <div className="font-bold">Alice (0zk...)</div>
                      <div className="text-xs text-gray-500">Private Identity</div>
                    </div>
                  </div>
                  <div className="text-red-400 text-xs">No ETH</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-gray-700 to-secondary animate-pulse" />
                </div>

                {/* Relayer */}
                <div className="flex items-center justify-between p-4 border border-secondary/50 rounded-lg bg-secondary/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl">🤖</div>
                    <div>
                      <div className="font-bold text-secondary">Relayer Node</div>
                      <div className="text-xs text-secondary/70">Public Identity</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-xs">Pays ETH</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-gray-700" />
                </div>

                 {/* Blockchain */}
                 <div className="p-4 border border-white/20 rounded-lg bg-black text-center">
                  <div className="font-bold">Ethereum Network</div>
                  <div className="text-xs text-gray-500 mt-1">Sender: Relayer (Not Alice)</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};