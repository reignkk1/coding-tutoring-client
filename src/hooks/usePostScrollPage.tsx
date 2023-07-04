import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../reduxHooks";
import { pageIncrease, pageReset } from "../store/post/pageSlice";

export default function usePostScrollPage() {
  const { value } = useAppSelector((state) => state.postPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      console.log(`${scrollTop} + ${clientHeight} >= ${scrollHeight}`);

      // 주소 변경 되면 같아짐.. 왜인지는 연구대상
      if (clientHeight === scrollHeight) {
        return dispatch(pageReset());
      }

      // 사용자의 스크롤 위치가 맨 밑에 있을 시
      if (scrollTop + clientHeight >= scrollHeight) {
        // page +1
        console.log("page + 1");

        dispatch(pageIncrease());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  return [value, dispatch] as const;
}
