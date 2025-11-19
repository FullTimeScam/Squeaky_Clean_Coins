import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part1Mechanism = () => {
  return (
    <Section id="page02" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Hybrid Architecture
          </h2>
          <p className="text-xl text-muted-foreground">
            투명한 이더리움 세상 속에 숨겨진 '암호화된 장부'
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 이더리움 세상 */}
          <Card className="p-8 bg-card/30 border-white/10 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-500" />
            <h3 className="text-2xl font-bold mb-6 text-gray-400">Public Layer (Ethereum)</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-black/40 rounded border border-white/5">
                <div className="flex justify-between text-green-400">
                  <span>Account A</span>
                  <span>100 ETH</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Balance is visible</div>
              </div>
              <div className="flex justify-center text-2xl">⬇️</div>
              <div className="p-4 bg-black/40 rounded border border-white/5 opacity-50">
                <div className="flex justify-between text-gray-400">
                  <span>Transaction</span>
                  <span>Public</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Sender/Receiver Revealed</div>
              </div>
            </div>
          </Card>

          {/* 오른쪽: 레일건 세상 */}
          <Card className="p-8 bg-card/50 border-primary/50 relative overflow-hidden min-h-[400px] card-glow flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <h3 className="text-2xl font-bold mb-6 text-primary">Private Layer (Railgun)</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-primary/10 rounded border border-primary/20">
                <div className="flex justify-between text-white">
                  <span>UTXO (Note)</span>
                  <span>??? ETH</span>
                </div>
                <div className="text-xs text-primary/70 mt-1">Encrypted Commitment</div>
              </div>
              <div className="flex justify-center text-2xl text-primary">⬇️</div>
              <div className="p-4 bg-primary/10 rounded border border-primary/20">
                <div className="flex justify-between text-white">
                  <span>zk-Proof</span>
                  <span>Valid</span>
                </div>
                <div className="text-xs text-primary/70 mt-1">No Metadata Leaked</div>
              </div>
            </div>
            
            {/* 연결 설명 */}
            <div className="mt-6 p-4 bg-black/60 rounded-lg text-center">
              <p className="text-sm text-gray-300">
                "레일건은 스마트 컨트랙트 내부에<br/>
                <span className="text-primary font-bold">별도의 UTXO 장부</span>를 유지합니다."
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};