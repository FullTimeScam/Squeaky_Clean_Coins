import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

export const Part1Anonymity = () => {
  return (
    <Section id="page07-anonymity" className="relative">
      <div className="max-w-6xl w-full mx-auto px-6 text-center space-y-12">
        
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            The Anonymity Set
          </h2>
          <p className="text-xl text-muted-foreground">
            "당신의 트랜잭션은 숲속의 나뭇잎 하나와 같습니다."
          </p>
        </div>

        <div className="relative p-12 bg-black border border-white/10 rounded-3xl overflow-hidden">
          {/* Background Noise Animation */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-10 left-10 text-xs text-green-500 font-mono">0x1a...</div>
             <div className="absolute top-20 right-20 text-xs text-blue-500 font-mono">0xb2...</div>
             <div className="absolute bottom-10 left-1/2 text-xs text-purple-500 font-mono">0xc9...</div>
             {/* 더 많은 가짜 주소들이 떠다니는 효과 */}
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
             
             <div className="space-y-2">
               <div className="text-5xl font-bold text-white">1 vs N</div>
               <p className="text-sm text-gray-400">Privacy Level</p>
             </div>

             <div className="flex flex-col items-center justify-center">
               <div className="p-6 bg-primary/20 rounded-full border-2 border-primary animate-pulse">
                 <Users size={48} className="text-primary" />
               </div>
               <p className="mt-4 text-lg font-bold text-white">Shielded Pool</p>
             </div>

             <div className="space-y-2 text-left bg-white/5 p-4 rounded-lg">
               <p className="text-sm text-gray-300">
                 ✅ <b>Shield Volume:</b> 입금량이 많을수록
               </p>
               <p className="text-sm text-gray-300">
                 ✅ <b>User Count:</b> 사용자가 많을수록
               </p>
               <p className="text-sm text-gray-300">
                 ✅ <b>Time:</b> 시간이 지날수록
               </p>
               <div className="pt-2 border-t border-white/10 text-primary font-bold text-sm">
                 🚀 익명성(Entropy)은 기하급수적으로 증가
               </div>
             </div>

          </div>
        </div>

        <div className="max-w-3xl mx-auto p-6 bg-red-900/20 border border-red-500/30 rounded-xl">
          <h4 className="text-lg font-bold text-red-400 mb-2">Why Tornado Cash Failed?</h4>
          <p className="text-sm text-gray-300">
            Tornado Cash는 1 ETH, 10 ETH 처럼 <b>"고정된 금액"</b>만 섞을 수 있었습니다.<br/>
            Railgun은 <b>"임의의 금액(Arbitrary Amount)"</b>을 암호화하므로,<br/>
            금액을 통한 추적조차 불가능합니다.
          </p>
        </div>

      </div>
    </Section>
  );
};