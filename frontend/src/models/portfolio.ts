export default class Portfolio {
  constructor(
    private _title: string,
    private _url: string,
    private _summary: string,
    private _notionKey: string
  ) {}

  get title() {
    return this._title;
  }

  get url() {
    return this._url;
  }

  get summary() {
    return this._summary;
  }

  get notionKey() {
    return this._notionKey;
  }
}
