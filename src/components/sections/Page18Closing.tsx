import { Section } from "../Section";
import { ImageModal } from "../ImageModal"; // ImageModal 임포트
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";


export const Page18Closing = () => {
  return (
    <Section id="page18" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      {/* 이 div가 섹션의 메인 컨텐츠 영역입니다.
        (max-w-4xl mx-auto)
        이 div에 "relative"가 이미 적용되어 있으므로,
        이 안에 "absolute"로 이미지 모달을 배치합니다.
      */}
      <div className="relative space-y-16 text-center max-w-4xl mx-auto">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-bold text-gradient glow-text">
            🎤 마치며
          </h2>
        </div>

        <div className="space-y-10 pt-8">
          <p className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed">
            오늘 우리는 쫓고 쫓기는<br />
            '코인판 추격전'을 봤습니다
          </p>

          <div className="space-y-6">
            <p className="text-3xl md:text-4xl font-light text-foreground/90">
              세탁 기술은 계속 발전하지만
            </p>
            <p className="text-4xl md:text-5xl font-bold text-gradient-reverse glow-text">
              온체인에 찍힌 발자국은<br />
              영원합니다
            </p>
            <p className="text-3xl md:text-4xl font-light text-foreground/90">
              :)<br />
            </p>
          </div>
        </div>

        <div className="pt-4">
          <div className="inline-block border-gradient rounded-3xl px-16 py-8 hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] transition-all duration-300">
            <p className="text-4xl md:text-5xl font-bold text-gradient glow-text">
              Q&A
            </p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-muted-foreground italic">
            (편하게 질문 주세요. 최대한 답변 해보겠습니다. 😊)
          </p>
        </div>

        {/* QR 코드 - ImageModal 컴포넌트 대신 Dialog 로직을 직접 인라인으로 구현
          - DialogContent의 className="max-w-4xl"로 크기 조절 (기본값 6xl)
        */}
        <Dialog>
          <DialogTrigger asChild>
            {/* 이것이 클릭 가능한 135x135 썸네일 이미지입니다. */}
            <img
              src="/img/QR.png"
              alt="QR 코드"
              className="absolute bottom-10 right-10 z-20 h-[135px] w-[135px] cursor-pointer rounded-lg bg-white/70 p-2 shadow-lg transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </DialogTrigger>
          {/* 이것이 팝업되는 모달 컨텐츠입니다. 크기를 max-w-4xl(6xl의 약 70%)로 조절했습니다. */}
          <DialogContent className="max-w-2xl p-0 border-0">
            <img
              src="/img/QR.png"
              alt="QR 코드 (확대)"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
        
      </div>
    </Section>
  );
};