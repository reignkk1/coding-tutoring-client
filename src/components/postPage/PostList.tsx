import { getPosts } from "../../api/Post";
import { useEffect, useState } from "react";
import NoticePostList from "./NoticePostList";
import FindPostList from "./FindPostList";

interface IGetPost {
  id: number;
  area: string;
  content: string;
  onOrOff: string;
  subject: string;
  title: string;
}

export default function PostList({ category }: { category: string }) {
  const [posts, setPosts] = useState<IGetPost[]>();

  useEffect(() => {
    getPosts(setPosts, category);
  }, [category]);

  return category === "notice" ? (
    <NoticePostList posts={posts} />
  ) : (
    <FindPostList posts={posts} category={category} />
  );
}
