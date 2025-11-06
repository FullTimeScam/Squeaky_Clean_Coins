import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Page01Intro = () => {
  return (
    // 이 <section>이 page01 스냅 포인트가 됩니다.
    // 높이는 총 200vh (이미지 100vh + 텍스트 100vh)가 됩니다.
    <section id="page01" className="relative snap-start">
      
      {/* --- 1. 이미지 영역 (첫 화면) --- */}
      <div className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0 opacity-80">
          <img
            src="/img/computer_laundry.png"
            alt="행운 컴퓨터 세탁소"
            className="w-full h-full object-cover filter brightness-90"
            loading="lazy"
          />
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


        {/* 하단 스크롤 유도 아이콘 */}
        <div className="absolute bottom-10 z-20 animate-bounce text-white/70">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-8 w-8"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* --- 2. 텍스트 영역 (스크롤 후) --- */}
      <div className="relative flex min-h-screen w-full items-center justify-center px-6 md:px-12 py-20">
        
        {/* 기존 그라데이션 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        {/* 기존 <Section>의 max-w-6xl w-full wrapper */}
        <div className="max-w-6xl w-full">
          
          {/* 기존 중앙 정렬 텍스트 컨텐츠 */}
          <div className="relative space-y-12 text-center">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-bold text-gradient glow-text leading-tight">
                💸 깨끗한 코인!
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-gradient-reverse">
                뽀득 뽀득
              </h2>
              <p className="text-2xl md:text-3xl text-foreground/70 font-light">
                최신 콤-퓨타 세탁 합니다
              </p>
            </div>

            <div className="pt-12 space-y-6 max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-light text-foreground/90">
                최신 크립토 자금세탁 기법 파훼와
              </p>
              <p className="text-3xl md:text-4xl font-light text-foreground/90">
                골든타임 대응법
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};