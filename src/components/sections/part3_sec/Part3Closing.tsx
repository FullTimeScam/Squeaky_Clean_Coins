import { Section } from "@/components/Section";

export const Part3Closing = () => {
  return (
    <Section id="page04" className="relative">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 space-y-12">
        
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-gradient mb-8">
            The Future of DeFi
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
            레일건은 단순한 믹서가 아닙니다.<br/>
            <span className="font-bold text-white">
              "EVM을 위한 완벽한 프라이버시 레이어"
            </span><br/>
            입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10">
            <h3 className="text-lg font-bold text-primary mb-2">1. Usability</h3>
            <p className="text-sm text-gray-500">
              별도의 체인이나 L2 이동 없이,<br/>이더리움 위에서 바로 사용
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10">
            <h3 className="text-lg font-bold text-secondary mb-2">2. Security</h3>
            <p className="text-sm text-gray-500">
              수학적으로 증명된 zk-SNARKs와<br/>오픈소스 검증 완료
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10">
            <h3 className="text-lg font-bold text-accent mb-2">3. Compliance</h3>
            <p className="text-sm text-gray-500">
              Proof of Innocence를 통한<br/>규제 준수 및 자금 세탁 방지
            </p>
          </div>
        </div>

        <div className="pt-16">
          <p className="text-sm text-muted-foreground font-mono">
            Presentation by Team 7<br/>
            Park Jihwan • Yuk Eunseo • Shin Sejong
          </p>
        </div>

      </div>
    </Section>
  );
};