import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part1Contracts = () => {
  return (
    <Section id="page06-contracts" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Modular Architecture (v3)
          </h2>
          <p className="text-xl text-muted-foreground">
            거대한 모놀리스가 아닌, <span className="text-white font-bold">조립 가능한 레고 블록</span>처럼 설계되었습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* 왼쪽: Proxy Pattern 설명 */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-card/40 border-l-4 border-l-primary">
              <h3 className="text-xl font-bold text-primary mb-2">Proxy Pattern</h3>
              <p className="text-sm text-gray-400">
                사용자는 항상 <b>Proxy</b>하고만 대화합니다.<br/>
                뒤단의 <b>Logic</b>이 업그레이드되어도 주소는 바뀌지 않습니다.
              </p>
            </Card>
            <div className="p-4 border border-dashed border-gray-600 rounded-lg text-center text-gray-500 text-sm">
              EVM Contract Size Limit<br/>(~24KB)을 극복하기 위한 필수 설계
            </div>
          </div>

          {/* 중앙 & 오른쪽: 4대 모듈 시각화 */}
          <div className="lg:col-span-8">
            <div className="relative p-8 bg-gray-900/50 rounded-2xl border border-white/10">
              
              {/* Proxy Layer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-black font-bold rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] z-10">
                Railgun Proxy
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                
                {/* Module 1: Token Vault */}
                <Card className="p-6 bg-blue-950/30 border-blue-500/30 hover:border-blue-500/60 transition-all card-glow group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏦</div>
                  <h4 className="text-lg font-bold text-blue-400">Token Vault</h4>
                  <p className="text-xs text-gray-400 mt-2">
                    실제 ERC-20 토큰과 NFT가 보관되는 금고.<br/>
                    자금은 여기서 절대 나가지 않습니다.
                  </p>
                </Card>

                {/* Module 2: Accumulator */}
                <Card className="p-6 bg-green-950/30 border-green-500/30 hover:border-green-500/60 transition-all card-glow group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🌲</div>
                  <h4 className="text-lg font-bold text-green-400">Accumulator</h4>
                  <p className="text-xs text-gray-400 mt-2">
                    Merkle Tree와 Nullifier 상태를 관리.<br/>
                    "누가 얼마를 가졌는지" 암호화된 장부.
                  </p>
                </Card>

                {/* Module 3: Verifier */}
                <Card className="p-6 bg-purple-950/30 border-purple-500/30 hover:border-purple-500/60 transition-all card-glow group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚖️</div>
                  <h4 className="text-lg font-bold text-purple-400">Verifier</h4>
                  <p className="text-xs text-gray-400 mt-2">
                    Groth16 증명(Proof)을 검증하는 판사.<br/>
                    수학적으로 틀린 거래는 즉시 거부(Revert).
                  </p>
                </Card>

                {/* Module 4: Adapt Relay */}
                <Card className="p-6 bg-orange-950/30 border-orange-500/30 hover:border-orange-500/60 transition-all card-glow group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🔌</div>
                  <h4 className="text-lg font-bold text-orange-400">Adapt Relay</h4>
                  <p className="text-xs text-gray-400 mt-2">
                    외부 DeFi(Uniswap, Aave 등)와 연결되는 어댑터.<br/>
                    Multicall 기능을 통해 복합 거래 지원.
                  </p>
                </Card>

              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};