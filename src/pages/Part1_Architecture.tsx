import { Navigation } from "@/components/Navigation";
import { Part1Intro } from "@/components/sections/part1_arch/Part1Intro";
import { Part1Mechanism } from "@/components/sections/part1_arch/Part1Mechanism";
import { Part1ZK } from "@/components/sections/part1_arch/Part1ZK";
import { Part1Groth16 } from "@/components/sections/part1_arch/Part1Groth16"; // [New]
import { Part1Circuit } from "@/components/sections/part1_arch/Part1Circuit"; // [New]
import { Part1Merkle } from "@/components/sections/part1_arch/Part1Merkle";

const Part1_Architecture = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-background text-foreground">
      <Navigation />
      
      {/* 1. 아키텍처 인트로 */}
      <Part1Intro />
      
      {/* 2. Account vs UTXO 메커니즘 */}
      <Part1Mechanism />
      
      {/* 3. ZK 개념 (Note & Commitment) */}
      <Part1ZK />

      {/* 4. [NEW] Groth16 알고리즘 심층 분석 */}
      <Part1Groth16 />

      {/* 5. [NEW] 회로 해부학 & Poseidon 해시 */}
      <Part1Circuit />
      
      {/* 6. 머클 트리와 널리파이어 */}
      <Part1Merkle />
    </div>
  );
};

export default Part1_Architecture;