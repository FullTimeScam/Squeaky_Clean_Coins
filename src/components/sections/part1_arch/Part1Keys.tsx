import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Key, Eye, Shield, Lock } from "lucide-react";

export const Part1Keys = () => {
  return (
    <Section id="page03-keys" className="relative">
      <div className="max-w-6xl w-full mx-auto px-6">
        
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Key Architecture
          </h2>
          <p className="text-xl text-muted-foreground">
            레일건 지갑은 <span className="text-white font-bold">두 개의 층(Layer)</span>으로 나뉩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* 0zk Address Structure */}
          <Card className="md:col-span-2 p-8 bg-black/60 border-white/10 flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold text-white">0zk Address (Public)</h3>
            <p className="text-gray-400">
              이더리움 주소(0x...)와 달리, 레일건 주소는 두 개의 공개키가 결합된 형태입니다.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-2 p-4 bg-gray-900 rounded-xl font-mono text-sm md:text-base border border-dashed border-gray-600">
              <span className="text-purple-400">0zk1qy...</span>
              <span className="text-gray-600">=</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">Spending PubKey</span>
              <span className="text-gray-400">+</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30">Viewing PubKey</span>
            </div>
          </Card>

          {/* Spending Key */}
          <Card className="p-8 bg-card/40 border-blue-500/30 hover:border-blue-500/60 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full text-blue-400 group-hover:rotate-12 transition-transform">
                <Key size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-400">Spending Key</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <Lock className="shrink-0 mt-1 text-blue-500" size={16} />
                <span><b>자산 소유권 증명:</b> 노트를 소비(Spend)할 때 ZK 증명 생성에 사용됩니다.</span>
              </li>
              <li className="flex gap-3">
                <Shield className="shrink-0 mt-1 text-blue-500" size={16} />
                <span><b>최상위 보안:</b> 절대 외부로 유출되거나 공유되어서는 안 됩니다.</span>
              </li>
            </ul>
          </Card>

          {/* Viewing Key */}
          <Card className="p-8 bg-card/40 border-green-500/30 hover:border-green-500/60 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/20 rounded-full text-green-400 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-400">Viewing Key</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <Lock className="shrink-0 mt-1 text-green-500" size={16} />
                <span><b>복호화 전용:</b> 블록체인에 기록된 암호문을 해석하여 내 잔고를 확인합니다.</span>
              </li>
              <li className="flex gap-3">
                <Shield className="shrink-0 mt-1 text-green-500" size={16} />
                <span><b>선택적 공유:</b> 세무 감사나 규제 준수를 위해 제3자에게 제공할 수 있습니다.</span>
              </li>
            </ul>
          </Card>

        </div>
      </div>
    </Section>
  );
};