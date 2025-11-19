import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";

export const Part1Sync = () => {
  return (
    <Section id="page04-sync" className="relative">
      <div className="max-w-7xl w-full mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-accent">Trial Decryption</span><br />
              (The Scanning Process)
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "블록체인에는 수취인 이름이 없습니다.<br/>
              그렇다면 지갑은 <b>어떻게 내 돈을 찾을까요?</b>"
            </p>
            
            <div className="space-y-6">
              <div className="p-4 bg-black/40 border-l-4 border-accent rounded-r-lg">
                <p className="text-gray-300">
                  지갑은 블록체인의 모든 <b>'암호화된 이벤트'</b>를 다운로드하여,
                  하나하나 <b>Viewing Key</b>로 열어봅니다.
                </p>
              </div>
              
              <ul className="space-y-3 text-sm text-gray-400">
                <li>1. 스마트 컨트랙트에서 <span className="text-white font-mono">Commitment</span> 이벤트 수신</li>
                <li>2. 로컬 DB에서 <span className="text-white font-mono">Viewing Key</span>로 복호화 시도</li>
                <li>3. 성공하면? <span className="text-green-400 font-bold">"내 돈이다!"</span> (잔고 업데이트)</li>
                <li>4. 실패하면? <span className="text-gray-600">"남의 돈이다"</span> (무시)</li>
              </ul>
            </div>
          </div>

          {/* Scanning Visualization */}
          <div className="relative p-8 bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-[shimmer_2s_infinite]" />
            
            <div className="space-y-3 font-mono text-xs md:text-sm">
              {/* Event Stream */}
              <div className="flex items-center gap-4 opacity-30">
                <span className="text-gray-500">Block #1928301</span>
                <span className="text-gray-600">Encrypted Note: 0x9a1f...</span>
                <span className="text-red-500">❌ Failed</span>
              </div>
              <div className="flex items-center gap-4 opacity-50">
                <span className="text-gray-500">Block #1928302</span>
                <span className="text-gray-600">Encrypted Note: 0xb2c3...</span>
                <span className="text-red-500">❌ Failed</span>
              </div>
              
              {/* Match Found */}
              <div className="flex items-center gap-4 p-3 bg-accent/10 border border-accent/50 rounded scale-105 shadow-lg">
                <span className="text-accent font-bold">Block #1928303</span>
                <span className="text-white">Encrypted Note: 0xff99...</span>
                <span className="text-green-400 font-bold">✅ Decrypted!</span>
              </div>
              <div className="pl-12 text-green-300">
                ↳ Amount: 500 USDC<br/>
                ↳ Blinding: 0x77a1...
              </div>

              <div className="flex items-center gap-4 opacity-50">
                <span className="text-gray-500">Block #1928304</span>
                <span className="text-gray-600">Encrypted Note: 0x1d4e...</span>
                <span className="text-red-500">❌ Failed</span>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              * 이 모든 과정은 사용자 로컬 기기(Client-side)에서 일어납니다.
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};