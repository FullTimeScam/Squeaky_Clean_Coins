import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"; // Dialog 컴포넌트 추가

export const Page04CasinoMethod = () => {
  // steps 배열에 img 속성 추가
  const steps = [
    { num: "1", title: "입금", desc: "훔친 코인 → 카지노 입금 주소", emoji: "💰", img: "/img/casino/BCgame_deposit.png" },
    { num: "2", title: "칩 전환", desc: "코인 → 카지노 고유 칩 (추적 단절)", emoji: "🎲", img: "/img/casino/BCgame_chips.png" },
    { num: "3", title: "짧은 플레이", desc: "'정상' 게임 활동으로 위장", emoji: "🃏", img: "/img/casino/BCgame_games.png" },
    { num: "4", title: "분할 출금", desc: "100억 → 1억씩 100번", emoji: "💸", img: "/img/casino/step4.png" },
    { num: "5", title: "교환 출금", desc: "ETH → XMR, TRX", emoji: "🔄", img: "/img/casino/BCgame_withdrawal.png" },
    { num: "6", title: "체인 이동", desc: "이더리움 → 솔라나", emoji: "⛓️", img: "/img/casino/step6.png" },
  ];

  return (
    <Section id="page04" className="relative">
      <div className="relative space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            세탁 방식: The "Textbook" Method
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            "돌리고~ 쪼개고~ 바꿔서 뺀다!"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-8">
          {steps.map((step) => (
            // Dialog로 각 카드를 래핑
            <Dialog key={step.num}>
              <DialogTrigger asChild>
                <Card 
                  className="bg-card/50 border-primary/20 p-8 space-y-4 hover:border-primary/50 transition-all duration-300 card-glow cursor-pointer" // cursor-pointer 추가
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{step.emoji}</div>
                    <div className="text-3xl font-bold text-primary">{step.num}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </Card>
              </DialogTrigger>
              {/* ImageModal.tsx의 DialogContent 스타일 참고 */}
              <DialogContent className="max-w-4xl p-0 border-0">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </Section>
  );
};