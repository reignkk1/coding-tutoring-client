import { useLocation } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";

export default function PostDetail({ category }: { category: string }) {
  const post = useLocation().state;
  console.log(post);
  return <Wrapper>hello</Wrapper>;
}
