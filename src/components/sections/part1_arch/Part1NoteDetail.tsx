import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { ArrowDown, Lock, EyeOff, Key, Coins } from "lucide-react";

export const Part1NoteDetail = () => {
  return (
    <Section id="page03-note-detail" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        
        {/* 헤더 영역 */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Anatomy of a Note
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            블록체인에는 오직 <b>"암호화된 껍데기(Commitment)"</b>만 기록됩니다.<br/>
            그렇다면 그 껍데기 안에는 <span className="text-white font-bold">구체적으로 무엇</span>이 들어있을까요?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 왼쪽: Note의 4가지 구성 요소 시각화 */}
          <div className="space-y-6">
            <div className="relative p-8 bg-card/30 border border-primary/30 rounded-2xl backdrop-blur-sm">
              <div className="absolute -top-4 left-8 bg-primary text-black px-4 py-1 font-bold rounded-full text-sm">
                Private Note (Off-chain)
              </div>
              
              <div className="space-y-4">
                {/* 요소 1: 토큰 */}
                <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
                  <div className="p-2 bg-blue-500/20 rounded-full text-blue-400">
                    <Coins size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono">1. Token Address</div>
                    <div className="text-lg font-bold text-white">USDC (0xa0b8...)</div>
                  </div>
                </div>

                {/* 요소 2: 수량 */}
                <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
                  <div className="p-2 bg-green-500/20 rounded-full text-green-400">
                    <span className="text-xl font-bold">$</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono">2. Amount</div>
                    <div className="text-lg font-bold text-white">1,000,000 USDC</div>
                  </div>
                </div>

                {/* 요소 3: 소유자 키 */}
                <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
                  <div className="p-2 bg-yellow-500/20 rounded-full text-yellow-400">
                    <Key size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono">3. Owner Public Key</div>
                    <div className="text-lg font-bold text-white">Alice's 0zk Key</div>
                  </div>
                </div>

                {/* 요소 4: 랜덤값 (핵심) */}
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg border border-primary/60 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <div className="p-2 bg-primary/20 rounded-full text-primary">
                    <EyeOff size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-primary font-bold font-mono">4. Blinding Factor (Random)</div>
                      <span className="px-2 py-0.5 bg-primary text-black text-[10px] font-bold rounded">VITAL</span>
                    </div>
                    <div className="text-lg font-bold text-white">0x7f3a9c2... (Random)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="text-gray-500 animate-bounce" size={32} />
            </div>

            {/* 결과물: 해시값 */}
            <div className="p-6 bg-black rounded-xl border border-gray-700 text-center">
              <div className="text-sm text-gray-500 mb-2">Pedersen / Poseidon Hash</div>
              <div className="font-mono text-xl md:text-2xl text-gray-300 truncate">
                0x9b1d8f3a... (Commitment)
              </div>
              <p className="text-xs text-gray-600 mt-2">▲ 블록체인에는 오직 이 값만 기록됩니다.</p>
            </div>
          </div>

          {/* 오른쪽: 왜 Blinding Factor가 중요한가? (상세 설명) */}
          <div className="space-y-8">
            <Card className="p-8 bg-gray-900/80 border-l-4 border-l-primary border-y-0 border-r-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Q. 왜 "랜덤값(Blinding Factor)"이 필수인가요?
              </h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  만약 랜덤값이 없다면, 해시값은 항상 일정합니다.<br/>
                  <span className="text-red-400">Hash(100 USDC) = 0xabc...</span>
                </p>
                <p>
                  이렇게 되면 해커는 <b>"무차별 대입 공격(Brute Force)"</b>으로<br/>
                  모든 금액의 해시값을 미리 계산해두고,<br/>
                  블록체인의 데이터와 대조하여 금액을 알아낼 수 있습니다.
                </p>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-base">
                  <p className="text-primary font-bold mb-2">✅ Solution:</p>
                  <p>
                    아무리 같은 <b>100 USDC</b>라도,<br/>
                    매번 다른 <b>랜덤값(Salt)</b>을 섞어서 해시를 만듭니다.<br/>
                    <span className="text-white font-mono block mt-2 text-sm">
                      Hash(100, Random_A) ≠ Hash(100, Random_B)
                    </span>
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card/40 rounded-lg border border-white/10 text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-bold text-white">Perfect Hiding</div>
                <div className="text-sm text-gray-500">내용을 절대 유추할 수 없음</div>
              </div>
              <div className="p-6 bg-card/40 rounded-lg border border-white/10 text-center">
                <div className="text-3xl mb-2">🧩</div>
                <div className="font-bold text-white">Binding</div>
                <div className="text-sm text-gray-500">나중에 내용을 바꿀 수 없음</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};