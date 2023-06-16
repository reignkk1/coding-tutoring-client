import { useRouteLoaderData } from "react-router-dom";
import { useGetReceivedNotes } from "../api/note";

export default function Notes() {
  const token = useRouteLoaderData("root");
  console.log(token);
  useGetReceivedNotes(token as string);
  return <div></div>;
}
