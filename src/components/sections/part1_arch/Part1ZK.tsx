import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part1ZK = () => {
  return (
    <Section id="page03" className="relative">
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* 텍스트 설명 */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-secondary">The Note</span><br />
              (Encrypted UTXO)
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              레일건의 자금은 '계좌 잔고'가 아닌<br/>
              <span className="text-white font-bold">암호화된 쪽지(Note)</span> 형태로 존재합니다.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-secondary bg-secondary/5">
                <h4 className="font-bold text-secondary mb-1">Commitment (C)</h4>
                <p className="text-sm text-gray-400">
                  Hash(Token, Amount, Blinding Factor, Owner Key)
                </p>
              </div>
              <div className="p-4 border-l-4 border-white/20 bg-white/5">
                <h4 className="font-bold text-white mb-1">Zero-Knowledge Proof</h4>
                <p className="text-sm text-gray-400">
                  "나는 이 Note의 주인이며, 내용을 공개하지 않고도<br/>
                  올바른 개인키를 가지고 있음을 증명한다."
                </p>
              </div>
            </div>
          </div>

          {/* 시각화 카드 */}
          <div className="flex-1 w-full">
            <Card className="p-8 bg-black/80 border-secondary/30 card-glow">
              <div className="space-y-6 font-mono text-sm">
                <div className="flex justify-between items-center text-gray-500 mb-2">
                  <span>Input Note</span>
                  <span>Output Note</span>
                </div>
                
                {/* 회로도 시각화 */}
                <div className="relative p-6 border border-dashed border-gray-700 rounded-lg bg-gray-900/50">
                  <div className="absolute -top-3 left-4 px-2 bg-black text-secondary text-xs">
                    Groth16 ZK Circuit
                  </div>
                  
                  <div className="flex justify-between items-center gap-4">
                    <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/50 text-secondary text-xs text-center p-2">
                      Old Note<br/>(Spent)
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-secondary/50 to-secondary/50 animate-pulse" />
                    <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/50 text-secondary text-xs text-center p-2">
                      New Note<br/>(Created)
                    </div>
                  </div>
                </div>

                <div className="text-center text-xs text-gray-500 mt-4">
                  * 검증자는 입/출력 값의 유효성만 알 수 있음
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};