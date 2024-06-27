"use client";

import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

export default async function NotionContent(props: {
  recordMap: ExtendedRecordMap;
}) {
  const { recordMap } = props;
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      disableHeader={true}
      mapPageUrl={(pageId) => `/contents/${pageId}`}
    />
  );
}
//
