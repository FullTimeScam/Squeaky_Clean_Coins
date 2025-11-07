import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import { ImageModal } from "../ImageModal";

export const Page13RailgunDemo = () => {
  return (
    <Section id="page13" className="relative">
      <div className="relative space-y-12 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            레일건 실습: A to Z
          </h2>
          <p className="text-xl text-muted-foreground">
            실제 레일건을 사용할 때 온체인에는 어떻게 기록되는지 살펴봅니다.
          </p>
        </div>

        {/* --- 1. 지갑 준비 --- */}
        <Card className="bg-card/50 border-primary/30 p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">💳</div>
            <h3 className="text-2xl font-bold text-primary">1단계: 지갑 준비 및 펀딩 (공개)</h3>
          </div>
          <p className="text-base text-muted-foreground pl-14">
            레일건은 공개키(EVM)와 비공개키(0zk)를 생성합니다. 자금은 공개 지갑에 먼저 입금합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <div className="space-y-2">
              <ImageModal src="img/0zk/image (4).png" alt="레일건 지갑 상세" className="rounded-lg border" />
              <p className="text-xs text-center text-muted-foreground">1. 0zk 비공개 주소와 EVM 공개 주소가 생성됩니다.</p>
            </div>
            <div className="space-y-2">
              <ImageModal src="img/0zk/image (1).png" alt="공개 지갑" className="rounded-lg border" />
              <p className="text-xs text-center text-muted-foreground">2. '실드'할 자금을 공개 지갑(Public Mode)에 준비합니다.</p>
            </div>
            <div className="space-y-2">
              <ImageModal src="img/0zk/image (3).png" alt="조회 전용 키" className="rounded-lg border" />
              <p className="text-xs text-center text-muted-foreground">3. (참고) 감사용 '조회 전용' 비공개 키도 제공됩니다.</p>
            </div>
          </div>
        </Card>

        {/* --- 2. 쉴드 --- */}
        <Card className="bg-card/50 border-secondary/30 p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🛡️</div>
            <h3 className="text-2xl font-bold text-secondary">2단계: 쉴드 (Shield) (공개 → 비공개)</h3>
          </div>
          <p className="text-base text-muted-foreground pl-14">
            공개 지갑의 자산이 레일건 컨트랙트로 전송됩니다. 이 거래는 공개적으로 보입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <ImageModal src="img/0zk/image (2).png" alt="쉴드 트랜잭션" className="rounded-lg border" />
              <p className="text-xs text-center text-muted-foreground">4. [공개 기록] 공개 주소가 레일건 컨트랙트로 토큰을 전송(Shield)합니다.</p>
            </div>
            <div className="space-y-2">
              <ImageModal src="img/0zk/image.png" alt="비공개 지갑" className="rounded-lg border" />
              <p className="text-xs text-center text-muted-foreground">5. [비공개 상태] 전송된 자산이 'Private Mode' 잔액으로 잡힙니다.</p>
            </div>
          </div>
        </Card>

        {/* --- 3. 프라이빗 전송 --- */}
        <Card className="bg-card/50 border-accent/30 p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">💸</div>
            <h3 className="text-2xl font-bold text-accent">3단계: 프라이빗 전송 (Private Send)</h3>
          </div>
          <p className="text-base text-muted-foreground pl-14">
            비공개 자산을 다른 0zk 주소로 전송합니다. 온체인에는 '누가' '얼마나' 보냈는지 드러나지 않습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <ImageModal src="img/0zk/image (5).png" alt="프라이빗 전송 UI" className="rounded-lg border" />
              <p className="text-xs text-center text-muted-foreground">6. [사용자 UI] 비공개 지갑에서 다른 0zk 주소로 전송을 시도합니다.</p>
            </div>
            <div className="space-y-2">
              <ImageModal src="img/0zk/image (6).png" alt="프라이빗 전송 트랜잭션" className="rounded-lg border" />
              <p className="text-xs text-center text-muted-foreground">7. [공개 기록] 릴레이어가 대신 트랜잭션을 실행하며, 전송 가치(Value)는 '0'입니다. 연결고리가 끊겼습니다.</p>
            </div>
          </div>
        </Card>

      </div>
    </Section>
  );
};