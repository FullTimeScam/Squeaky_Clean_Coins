import { Navigation } from "@/components/Navigation";
import { Part1Intro } from "@/components/sections/part1_arch/Part1Intro";
import { Part1Mechanism } from "@/components/sections/part1_arch/Part1Mechanism";
import { Part1ZK } from "@/components/sections/part1_arch/Part1ZK";
import { Part1NoteDetail } from "@/components/sections/part1_arch/Part1NoteDetail";
import { Part1Keys } from "@/components/sections/part1_arch/Part1Keys";
import { Part1Sync } from "@/components/sections/part1_arch/Part1Sync";
import { Part1Circuit } from "@/components/sections/part1_arch/Part1Circuit";
import { Part1Groth16 } from "@/components/sections/part1_arch/Part1Groth16";
import { Part1Merkle } from "@/components/sections/part1_arch/Part1Merkle";
import { Part1Contracts } from "@/components/sections/part1_arch/Part1Contracts"; // [New]
import { Part1Anonymity } from "@/components/sections/part1_arch/Part1Anonymity"; // [New]

const Part1_Architecture = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-background text-foreground">
      <Navigation />
      
      <Part1Intro />
      <Part1Mechanism />
      <Part1ZK />
      <Part1NoteDetail />
      <Part1Keys />
      <Part1Sync />
      <Part1Circuit />
      <Part1Groth16 />
      <Part1Merkle />
      
      {/* [NEW] 스마트 컨트랙트 모듈화 구조 */}
      <Part1Contracts />

      {/* [NEW] 프라이버시 강도 (Anonymity Set) */}
      <Part1Anonymity />
    </div>
  );
};

export default Part1_Architecture;