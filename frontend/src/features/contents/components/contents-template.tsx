"use client";

import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

export default async function ContentsTemplate(props: {
  recordMap: ExtendedRecordMap;
}) {
  const { recordMap } = props;
  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        disableHeader={true}
        mapPageUrl={(pageId) => `/contents/${pageId}`}
      />
    </div>
  );
}
//
