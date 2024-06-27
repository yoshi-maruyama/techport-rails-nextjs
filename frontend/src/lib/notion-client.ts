import { NotionAPI } from "notion-client";

class NotionClient {
  private _api;

  constructor() {
    this._api = new NotionAPI();
  }

  async getPage(pageId: string) {
    try {
      const recordMap = await this._api.getPage(pageId);
      return recordMap;
    } catch (e) {
      console.log(e);
    }
  }
}

const notionClient = new NotionClient();
export default notionClient;
