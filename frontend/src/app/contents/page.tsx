import ContentsTemplate from "@/features/contents/components/contents-template";
import { NotionAPI } from "notion-client";
import "react-notion-x/src/styles.css";

export default async function ContentsPage() {
  const api = new NotionAPI();
  const recordMap = await api.getPage("cabf1c78b8f6496ba06197b8db6bab76");
  return <ContentsTemplate recordMap={recordMap} />;
}
