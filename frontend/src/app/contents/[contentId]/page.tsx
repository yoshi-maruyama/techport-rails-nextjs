import ContentsTemplate from "@/features/contents/components/contents-template";
import notionClient from "@/lib/notion-client";
import "react-notion-x/src/styles.css";

export default async function ContentsPage({
  params,
}: {
  params: { contentId: string };
}) {
  const { contentId } = params;
  const recordMap = await notionClient.getPage(contentId);
  return <ContentsTemplate recordMap={recordMap} />;
}
