import { Navigation } from "@/components/Navigation";
import { Part3Intro } from "@/components/sections/part3_sec/Part3Intro";
import { Part3POI } from "@/components/sections/part3_sec/Part3POI";
import { Part3ViewingKey } from "@/components/sections/part3_sec/Part3ViewingKey";
import { Part3Closing } from "@/components/sections/part3_sec/Part3Closing";

const Part3_Security = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Section 1: 보안 및 규제 준수 인트로 */}
      <Part3Intro />
      
      {/* Section 2: 무결성 증명 (POI) */}
      <Part3POI />
      
      {/* Section 3: 감사용 뷰잉 키 */}
      <Part3ViewingKey />
      
      {/* Section 4: 전체 발표 마무리 */}
      <Part3Closing />
    </div>
  );
};

export default Part3_Security;