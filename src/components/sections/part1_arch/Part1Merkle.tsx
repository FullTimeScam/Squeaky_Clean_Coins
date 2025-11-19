import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part1Merkle = () => {
  return (
    <Section id="page04" className="relative">
      <div className="max-w-6xl w-full mx-auto px-6 text-center space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-reverse">
            State Management
          </h2>
          <p className="text-xl text-muted-foreground">
            수억 개의 프라이빗 노트를 어떻게 관리할까?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Merkle Tree 설명 */}
          <Card className="p-8 bg-card/40 border-accent/30 hover:border-accent/60 transition-all duration-300">
            <div className="text-6xl mb-6">🌲</div>
            <h3 className="text-2xl font-bold text-accent mb-4">Merkle Tree</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              모든 사용자의 Note Commitment는<br/>
              거대한 머클 트리의 <span className="text-accent font-bold">Leaf 노드</span>로 저장됩니다.
            </p>
            <ul className="text-left text-sm text-gray-400 space-y-2 bg-black/30 p-4 rounded-lg">
              <li>• 스마트 컨트랙트는 Root Hash만 저장</li>
              <li>• 사용자는 Merkle Path를 통해 멤버십 증명</li>
              <li>• 가스비 절감을 위해 효율적인 Poseidon 해시 사용</li>
            </ul>
          </Card>

          {/* Nullifier 설명 */}
          <Card className="p-8 bg-card/40 border-red-400/30 hover:border-red-400/60 transition-all duration-300">
            <div className="text-6xl mb-6">🚫</div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">Nullifier</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              이미 사용된 Note를 다시 쓸 수 없도록<br/>
              <span className="text-red-400 font-bold">사용 흔적(Nullifier)</span>을 남깁니다.
            </p>
            <ul className="text-left text-sm text-gray-400 space-y-2 bg-black/30 p-4 rounded-lg">
              <li>• Note 사용 시 Nullifier Hash 생성 및 공개</li>
              <li>• Note 내용(금액, 소유자)과는 수학적으로 연결 불가</li>
              <li>• 컨트랙트는 Nullifier 중복 여부만 체크</li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 border border-white/10">
          <p className="text-lg font-mono text-white">
            "Merkle Tree는 <span className="text-accent">존재</span>를 증명하고, Nullifier는 <span className="text-red-400">미사용</span>을 증명합니다."
          </p>
        </div>
      </div>
    </Section>
  );
};