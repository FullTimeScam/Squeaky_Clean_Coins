import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part1Merkle = () => {
  return (
    <Section id="page05-merkle" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-reverse">
            State Management
          </h2>
          <p className="text-xl text-muted-foreground">
            "공개된 장부(Merkle Tree)와 사용된 티켓(Nullifier)"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* 왼쪽: Merkle Tree (Accumulator) */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/40 border-primary/30 hover:border-primary/60 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🌲</div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Merkle Tree</h3>
                  <p className="text-sm text-gray-400">The Registry of "All Valid Notes"</p>
                </div>
              </div>

              {/* Tree Visualization */}
              <div className="relative flex flex-col items-center space-y-4 py-4">
                {/* Root */}
                <div className="px-6 py-3 bg-primary/20 border border-primary/50 rounded-lg text-primary font-mono text-sm font-bold animate-pulse">
                  Merkle Root (On-chain)
                </div>
                
                {/* Lines */}
                <div className="w-32 h-8 border-x border-t border-gray-600 rounded-t-xl"></div>
                
                {/* Intermediates */}
                <div className="flex gap-8">
                  <div className="w-12 h-12 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center text-xs">H1</div>
                  <div className="w-12 h-12 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center text-xs">H2</div>
                </div>
                
                {/* Leaves */}
                <div className="flex gap-2 pt-2">
                  <div className="w-10 h-12 bg-green-900/50 border border-green-500/50 rounded flex items-center justify-center text-[10px] text-green-400">Note A</div>
                  <div className="w-10 h-12 bg-gray-900 border border-gray-700 rounded flex items-center justify-center text-[10px] opacity-50">...</div>
                  <div className="w-10 h-12 bg-gray-900 border border-gray-700 rounded flex items-center justify-center text-[10px] opacity-50">...</div>
                  <div className="w-10 h-12 bg-gray-900 border border-gray-700 rounded flex items-center justify-center text-[10px] opacity-50">...</div>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-gray-300 bg-black/40 p-4 rounded-lg">
                <p>• <b>Incremental:</b> 새 노트는 항상 오른쪽에 추가됨.</p>
                <p>• <b>Membership Proof:</b> 내 노트가 이 트리에 있다는 것을 '경로(Path)'만으로 증명.</p>
                <p>• <b>Efficiency:</b> 수억 개의 노트 중 내 것 하나를 찾는 데 <span className="text-primary">O(log N)</span> 비용만 소요.</p>
              </div>
            </Card>
          </div>

          {/* 오른쪽: Nullifier (Double Spend Protection) */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/40 border-red-400/30 hover:border-red-400/60 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🚫</div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400">Nullifier Mapping</h3>
                  <p className="text-sm text-gray-400">The List of "Spent Tickets"</p>
                </div>
              </div>

              {/* Nullifier Visualization */}
              <div className="space-y-4 font-mono text-sm">
                <div className="p-3 bg-black/60 rounded border border-white/10 flex justify-between items-center">
                  <span className="text-gray-500">0xab12...</span>
                  <span className="text-red-500 font-bold">USED (true)</span>
                </div>
                <div className="p-3 bg-black/60 rounded border border-white/10 flex justify-between items-center">
                  <span className="text-gray-500">0xcd34...</span>
                  <span className="text-red-500 font-bold">USED (true)</span>
                </div>
                <div className="p-3 bg-red-900/20 rounded border border-red-500/50 flex justify-between items-center animate-pulse">
                  <span className="text-white">0xef56... (My Note)</span>
                  <span className="text-green-400 font-bold">New Entry</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="p-4 bg-red-950/30 rounded-lg border border-red-900/50 text-sm">
                  <p className="text-red-300 font-bold mb-2">⚠️ The Privacy Paradox</p>
                  <p className="text-gray-300 leading-relaxed">
                    "노트를 썼다는 건 알아야 하지만,<br/>
                    <b>어떤 노트</b>를 썼는지는 몰라야 한다."
                  </p>
                </div>
                
                <div className="text-sm text-gray-400 pl-2 border-l-2 border-red-400">
                  <p>
                    <b>Nullifier = Hash(PrivKey, NoteIndex)</b><br/>
                    이 값은 노트와 수학적으로 연결되지만,<br/>
                    제3자는 절대 역추적할 수 없습니다.
                  </p>
                </div>
              </div>
            </Card>
          </div>

        </div>

        {/* 하단 결론 박스 */}
        <div className="mt-12 text-center">
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-lg md:text-xl text-white">
              "Merkle Tree는 <span className="text-primary font-bold">존재(Existence)</span>를 증명하고,<br className="md:hidden"/>
              Nullifier는 <span className="text-red-400 font-bold">유일성(Uniqueness)</span>을 보장합니다."
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};