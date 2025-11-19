import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part2Flow = () => {
  return (
    <Section id="page03" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6 text-center space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-reverse">
            Waku: The Shadow Network
          </h2>
          <p className="text-xl text-muted-foreground">
            IP 주소까지 숨기기 위해 블록체인 외부의 <span className="text-white">P2P 통신망</span>을 사용합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-left">
          {/* Step 1 */}
          <Card className="p-6 bg-card/40 border-white/5 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-primary mb-2">1. Generate Proof</h3>
            <p className="text-sm text-gray-400">
              사용자의 브라우저(클라이언트)에서 로컬로 ZK 증명을 생성합니다.<br/>
              <span className="text-xs text-gray-600 mt-2 block">* 인터넷 연결 없이도 가능</span>
            </p>
          </Card>

          {/* Step 2 */}
          <Card className="p-6 bg-card/40 border-white/5 hover:border-secondary/50 transition-all">
            <div className="text-4xl mb-4">📡</div>
            <h3 className="text-xl font-bold text-secondary mb-2">2. Waku Gossip</h3>
            <p className="text-sm text-gray-400">
              암호화된 트랜잭션을 <span className="text-white">Waku P2P 네트워크</span>에 브로드캐스팅합니다.<br/>
              <span className="text-xs text-gray-600 mt-2 block">* IP 추적 불가능 (Gossipsub protocol)</span>
            </p>
          </Card>

          {/* Step 3 */}
          <Card className="p-6 bg-card/40 border-white/5 hover:border-accent/50 transition-all">
            <div className="text-4xl mb-4">⛓️</div>
            <h3 className="text-xl font-bold text-accent mb-2">3. Submit On-chain</h3>
            <p className="text-sm text-gray-400">
              릴레이어가 Waku에서 메시지를 낚아채고, 자신의 서명을 담아 블록체인에 제출합니다.
            </p>
          </Card>
        </div>

        {/* Flow Line Visualization */}
        <div className="relative h-2 bg-gray-800 rounded-full mt-8 overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-primary/50 animate-pulse" />
          <div className="absolute top-0 left-1/3 h-full w-1/3 bg-secondary/50 animate-pulse delay-75" />
          <div className="absolute top-0 left-2/3 h-full w-1/3 bg-accent/50 animate-pulse delay-150" />
        </div>
      </div>
    </Section>
  );
};