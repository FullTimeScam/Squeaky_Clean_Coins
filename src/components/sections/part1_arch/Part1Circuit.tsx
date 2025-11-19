import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part1Circuit = () => {
  return (
    <Section id="page03-2" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* 왼쪽: 회로 구조도 */}
          <div className="lg:w-3/5 space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Anatomy of Railgun Circuit</h3>
            
            {/* 회로 다이어그램 시각화 */}
            <div className="relative p-6 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm">
              {/* Inputs */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-red-400 uppercase tracking-wider">Private Inputs (Witness)</div>
                  <div className="p-4 bg-red-950/30 border border-red-900/50 rounded-lg text-sm text-gray-300 space-y-1">
                    <p>• Token Address</p>
                    <p>• Amount</p>
                    <p>• Blinding Factor</p>
                    <p>• Spending Key 🔑</p>
                    <p>• Merkle Path 🌲</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono text-green-400 uppercase tracking-wider">Public Inputs (Instance)</div>
                  <div className="p-4 bg-green-950/30 border border-green-900/50 rounded-lg text-sm text-gray-300 space-y-1">
                    <p>• Merkle Root</p>
                    <p>• Nullifier Hash 🚫</p>
                    <p>• New Commitment 🆕</p>
                  </div>
                </div>
              </div>

              {/* Constraints Box */}
              <div className="relative p-6 border-2 border-dashed border-primary/50 rounded-xl bg-primary/5 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-background text-primary font-bold font-mono">
                  ZK Circuit (Constraints)
                </div>
                <ul className="text-left text-sm text-gray-300 space-y-2 max-w-md mx-auto">
                  <li className="flex gap-2">✅ <span><b>Ownership:</b> I have the private key for this note.</span></li>
                  <li className="flex gap-2">✅ <span><b>Membership:</b> This note exists in the Merkle Tree.</span></li>
                  <li className="flex gap-2">✅ <span><b>Nullifier:</b> This tag is correctly derived (no double spend).</span></li>
                </ul>
              </div>

              {/* Output Arrow */}
              <div className="flex justify-center mt-4">
                <div className="px-6 py-2 bg-white text-black font-bold rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  Proof π (Valid / Invalid)
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: Poseidon Hash 설명 */}
          <div className="lg:w-2/5 flex flex-col justify-center space-y-6">
            <Card className="p-8 bg-gradient-to-br from-blue-950/30 to-purple-950/30 border-blue-500/30 card-glow">
              <div className="text-5xl mb-4">🔱</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Poseidon Hash</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                "일반적인 SHA-256은 ZK 회로 안에서 너무 비쌉니다."
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-black/40 rounded border border-white/5">
                  <p className="text-sm text-gray-400 mb-1">Problem</p>
                  <p className="text-sm text-white">비트 연산(SHA, Keccak)은 ZK 제약 조건(Constraints)을 폭증시킴.</p>
                </div>
                <div className="p-4 bg-blue-500/10 rounded border border-blue-500/30">
                  <p className="text-sm text-blue-400 mb-1 font-bold">Solution: Poseidon</p>
                  <p className="text-sm text-gray-200">
                    ZK 회로에 최적화된 <b>대수적 구조(Algebraic Structure)</b>를 가진 해시 함수.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <span className="text-2xl font-bold text-white">Max 10x</span>
                <span className="block text-sm text-gray-500">Gas Saving Efficiency</span>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </Section>
  );
};