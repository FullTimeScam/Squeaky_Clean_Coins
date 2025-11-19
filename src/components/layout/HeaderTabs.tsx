import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const HeaderTabs = () => {
  const location = useLocation();

  // 'Home' 탭을 추가하여 기존 자료(Index.tsx)로 연결합니다.
  const tabs = [
    { path: "/", label: "🏠 Home (Intro)" },
    { path: "/part1", label: "1. Architecture" },
    { path: "/part2", label: "2. Flow & Gas" },
    { path: "/part3", label: "3. Security" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 pointer-events-none">
      {/* 배경에 블러 효과와 반투명 검은색을 깔아 스크롤되는 본문과 겹쳐도 잘 보이게 처리 
        pointer-events-auto로 버튼 클릭 가능하게 설정
      */}
      <div className="flex gap-2 p-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full pointer-events-auto shadow-lg transition-all hover:bg-black/60 hover:border-white/20">
        {tabs.map((tab) => {
          // 현재 경로가 탭의 경로와 일치하는지 확인 (Home 탭의 경우 정확히 '/' 일 때만 활성화)
          const isActive = tab.path === "/" 
            ? location.pathname === "/"
            : location.pathname.startsWith(tab.path);
          
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ease-in-out",
                isActive
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)] scale-105"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
};