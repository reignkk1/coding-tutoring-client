import { useEffect, useState } from "react";

export default function usePostScrollPage() {
  const [page, setPage] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 사용자의 스크롤 위치가 맨 밑에 있을 시
    if (scrollTop + clientHeight >= scrollHeight) {
      // page +1
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return [page, setPage] as const;
}
