import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part1Groth16 = () => {
  return (
    <Section id="page03-1" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            The Proof System: <span className="font-mono">Groth16</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            이더리움 메인넷의 가혹한 환경을 견디기 위한 최적의 선택
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 특징 1: Succinctness */}
          <Card className="p-8 bg-card/40 border-primary/20 hover:border-primary/50 transition-all duration-300 group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">📦</div>
            <h3 className="text-xl font-bold text-primary mb-3">Extreme Succinctness</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>증명(Proof) 크기가 단 <span className="text-white font-bold">128 Bytes</span> (3 Group Elements)에 불과합니다.</p>
              <p className="text-xs text-gray-500 mt-2">
                * 타 알고리즘(Plonk, Halo2) 대비 압도적으로 작아 <span className="text-primary">Call Data 가스비</span>를 획기적으로 절감합니다.
              </p>
            </div>
          </Card>

          {/* 특징 2: Constant Time */}
          <Card className="p-8 bg-card/40 border-secondary/20 hover:border-secondary/50 transition-all duration-300 group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-xl font-bold text-secondary mb-3">Constant Verification</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>회로가 아무리 복잡해도 검증 시간과 가스비는 <span className="text-white font-bold">일정(Constant)</span>합니다.</p>
              <div className="mt-4 bg-black/40 p-3 rounded font-mono text-xs">
                <span className="text-green-400">Verifier Gas Cost:</span><br/>
                ~200k - 300k Gas (Fixed)
              </div>
            </div>
          </Card>

          {/* 특징 3: Trusted Setup */}
          <Card className="p-8 bg-card/40 border-accent/20 hover:border-accent/50 transition-all duration-300 group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🗝️</div>
            <h3 className="text-xl font-bold text-accent mb-3">Powers of Tau</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>보안의 핵심인 <b>Trusted Setup</b> 세레머니를 완료했습니다.</p>
              <p className="text-xs text-gray-500 mt-2">
                * 참여자 중 <span className="text-white underline">단 한 명</span>이라도 정직하게 비밀키(Toxic Waste)를 파기했다면 수학적으로 안전합니다.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};