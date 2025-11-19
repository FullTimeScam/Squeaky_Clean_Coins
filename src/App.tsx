import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderTabs } from "@/components/layout/HeaderTabs";

// 기존 메인 페이지 (원래 있던 자료)
import Index from "./pages/Index";

// 새로 만든 기술 심층 발표 페이지들
import Part1_Architecture from "./pages/Part1_Architecture";
import Part2_Relayer from "./pages/Part2_Relayer";
import Part3_Security from "./pages/Part3_Security";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 상단 탭 네비게이션 (모든 페이지에 고정) */}
        <HeaderTabs />
        
        <Routes>
          {/* [수정됨] 기본 경로("/")는 기존의 'Squeaky Clean Coins' 전체 프레젠테이션을 보여줍니다. 
            이곳이 "표지"이자 "전체 요약" 역할을 합니다.
          */}
          <Route path="/" element={<Index />} />
          
          {/* 각 주제별 심층 발표 페이지 */}
          <Route path="/part1" element={<Part1_Architecture />} />
          <Route path="/part2" element={<Part2_Relayer />} />
          <Route path="/part3" element={<Part3_Security />} />
          
          {/* 404 에러 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;