import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Fingerprint, Database, ArrowRight, CheckCircle2 } from "lucide-react";

export const Part1Circuit = () => {
  return (
    <Section id="page04-circuit" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Inside the Black Box
          </h2>
          <p className="text-xl text-muted-foreground">
            블록체인은 내용을 볼 수 없지만, <span className="text-white font-bold">"3가지 규칙"</span>이 지켜졌는지 검증합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* 왼쪽: 입력 데이터 (Private & Public) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-4 rounded-xl bg-gray-900/50 border border-white/10 text-center">
              <div className="text-sm text-red-400 font-bold mb-2">SECRET INPUTS</div>
              <div className="space-y-2">
                <div className="px-3 py-2 bg-red-500/10 rounded text-xs text-gray-300">My Note (100 USDC)</div>
                <div className="px-3 py-2 bg-red-500/10 rounded text-xs text-gray-300">My Private Key</div>
                <div className="px-3 py-2 bg-red-500/10 rounded text-xs text-gray-300">Merkle Path</div>
              </div>
            </div>
            <div className="flex justify-center text-2xl animate-bounce">⬇️</div>
            <div className="p-4 rounded-xl bg-gray-900/50 border border-white/10 text-center">
              <div className="text-sm text-green-400 font-bold mb-2">PUBLIC INPUTS</div>
              <div className="space-y-2">
                <div className="px-3 py-2 bg-green-500/10 rounded text-xs text-gray-300">Merkle Root</div>
                <div className="px-3 py-2 bg-green-500/10 rounded text-xs text-gray-300">Nullifier Hash</div>
              </div>
            </div>
          </div>

          {/* 중앙: 회로 (The Machine) */}
          <div className="lg:col-span-6 relative">
            {/* 회로 외관 */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-30 blur-lg animate-pulse" />
            <Card className="relative p-8 bg-black border-white/20 rounded-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-6 py-1 border border-white/20 rounded-full text-primary font-mono font-bold text-sm">
                ZK Circuit Logic
              </div>

              {/* 3가지 규칙 시각화 */}
              <div className="space-y-6 mt-4">
                
                {/* Rule 1: 소유권 */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/50 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Rule 1. Ownership</h4>
                    <p className="text-sm text-gray-400">
                      "제출된 <b>Private Key</b>는 이 Note를 잠근 자물쇠와 일치하는가?"
                    </p>
                  </div>
                  <CheckCircle2 className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="h-px w-full bg-white/10" />

                {/* Rule 2: 존재성 */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/50 text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Rule 2. Existence</h4>
                    <p className="text-sm text-gray-400">
                      "이 Note는 위조되지 않고 <b>Merkle Tree</b>에 실제로 존재하는가?"
                    </p>
                  </div>
                  <CheckCircle2 className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="h-px w-full bg-white/10" />

                {/* Rule 3: 유일성 */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/50 text-red-400 group-hover:bg-red-500/30 transition-colors">
                    <Fingerprint size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Rule 3. Uniqueness</h4>
                    <p className="text-sm text-gray-400">
                      "파생된 <b>Nullifier</b>가 올바른가? (무작위 생성이 아님)"
                    </p>
                  </div>
                  <CheckCircle2 className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

              </div>
            </Card>
          </div>

          {/* 오른쪽: 결과물 (Proof) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-4">
            <ArrowRight className="text-gray-500 hidden lg:block" size={32} />
            <div className="rotate-90 lg:rotate-0 text-gray-500 block lg:hidden">⬇️</div>
            
            <Card className="w-full p-6 bg-white/5 border-primary/50 text-center card-glow cursor-pointer hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="text-xl font-bold text-primary mb-1">The Proof</h3>
              <div className="text-xs font-mono text-gray-400 break-all bg-black/50 p-2 rounded mt-2">
                0x1f9a... (128 bytes)
              </div>
              <p className="text-sm text-white mt-4 font-semibold">
                "Verified True"
              </p>
            </Card>
            
            <p className="text-xs text-center text-gray-500 px-2">
              * 이 증명서만 있으면 내용은 몰라도 유효성을 확신할 수 있습니다.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
};