import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import { ImageModal } from "../ImageModal"; // ImageModal 임포트

export const Page12RailgunHow = () => {
  return (
    <Section id="page12" className="relative">
      {/* 이 div가 섹션의 메인 컨텐츠 영역입니다.
        (max-w-6xl mx-auto)
        이 div에 "relative"가 이미 적용되어 있으므로,
        이 안에 "absolute"로 이미지 모달을 배치합니다.
      */}
      <div className="relative space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            작동 원리
          </h2>
          <p className="text-xl text-muted-foreground">
            "어떻게 흔적을 지우는가?"
          </p>
        </div>

        {/* 이전에 제가 잘못 추가했던 중앙의 큰 이미지 카드를 제거했습니다.
        */}

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-primary/30 p-8 space-y-6 hover:border-primary/60 transition-all duration-300 card-glow">
            <div className="text-center">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-primary mb-3">Shield</h3>
              <p className="text-lg text-foreground/90 mb-2">입금</p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• 비밀 계좌 생성 (0zk Address)</p>
              <p>• 암호화된 쪽지(UTXO) 생성</p>
              <p>• 머클 트리에 커밋먼트 저장</p>
              <p className="text-primary pt-2">→ 입금자 익명화</p>
            </div>
          </Card>

          <Card className="bg-card/50 border-secondary/30 p-8 space-y-6 hover:border-secondary/60 transition-all duration-300 card-glow">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Transact</h3>
              <p className="text-lg text-foreground/90 mb-2">내부 거래</p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• zk-SNARKs 영지식 증명</p>
              <p>• 널리파이어로 이중 지불 방지</p>
              <p>• '누가', '누구에게' 완전 은폐</p>
              <p className="text-secondary pt-2">→ 거래 내역 익명화</p>
            </div>
          </Card>

          <Card className="bg-card/50 border-accent/30 p-8 space-y-6 hover:border-accent/60 transition-all duration-300 card-glow">
            <div className="text-center">
              <div className="text-5xl mb-4">🚪</div>
              <h3 className="text-2xl font-bold text-accent mb-3">Unshield</h3>
              <p className="text-lg text-foreground/90 mb-2">출금</p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• 새 지갑으로 출금</p>
              <p>• 릴레이어가 가스비 대납</p>
              <p>• Waku P2P로 IP 은폐</p>
              <p className="text-accent pt-2">→ 입출금 연결 단절</p>
            </div>
          </Card>
        </div>

        <Card className="bg-card/30 border-primary/50 p-8 mt-8">
          <p className="text-xl text-center text-foreground/90 leading-relaxed">
            출금된 ETH가 누구의 입금에서 나온 건지 <span className="text-primary font-bold">아무도 모릅니다</span><br />
            <span className="text-sm text-muted-foreground">(Anonymity Set)</span>
          </p>
        </Card>

        {/* --- 추가된 이미지 모달 (우측 하단) --- */}
        {/* "relative space-y-12 max-w-6xl mx-auto" div 내부에 있으므로
          컨텐츠 영역의 우측 하단에 배치됩니다.
        */}
        <div className="absolute bottom-0 right-0 z-20 hover:scale-105 transition-transform duration-300">
          <ImageModal
            src="/img/how_works.png"
            alt="작동 원리 다이어그램"
            className="h-[135px] w-[135px] rounded-lg bg-white/70 p-2 shadow-lg"
          />
        </div>
        {/* --- --- */}

      </div>
    </Section>
  );
};