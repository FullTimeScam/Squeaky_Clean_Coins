import { Section } from "../Section";
import { ImageModal } from "../ImageModal"; // ImageModal 임포트

export const Page17Closing = () => {
  return (
    <Section id="page17" className="relative">
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
              우리는 그 발자국을 읽는 법을 배우고<br />
              허점을 찌를 뿐입니다
            </p>
          </div>
        </div>

        <div className="pt-16">
          <div className="inline-block border-gradient rounded-3xl px-16 py-8 hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] transition-all duration-300">
            <p className="text-4xl md:text-5xl font-bold text-gradient glow-text">
              Q&A
            </p>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground italic">
            (아, 물론 "제가 직접 해봤는데..." 식의 질문은 정중히 사양합니다 😊)
          </p>
        </div>

        {/* --- 추가된 QR 코드 이미지 모달 (우측 하단) --- */}
        <div className="absolute bottom-0 right-0 z-20 hover:scale-105 transition-transform duration-300">
          <ImageModal
            src="/img/QR.png"
            alt="QR 코드"
            className="h-[135px] w-[135px] rounded-lg bg-white/70 p-2 shadow-lg"
          />
        </div>
        {/* --- --- */}
        
      </div>
    </Section>
  );
};