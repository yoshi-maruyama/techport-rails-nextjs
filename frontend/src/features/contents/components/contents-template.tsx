import { ExtendedRecordMap } from "notion-types";
import NotionContent from "@/features/contents/components/notion-content";
import { notFound } from "next/navigation";

export default async function ContentsTemplate(props: {
  recordMap?: ExtendedRecordMap;
}) {
  const { recordMap } = props;
  if (recordMap) {
    return <NotionContent recordMap={recordMap} />;
  } else {
    return notFound();
  }
}
