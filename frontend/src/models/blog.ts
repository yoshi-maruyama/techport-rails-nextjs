export default class Blog {
  constructor(
    private _title: string,
    private _summary: string,
    private _notionKey: string
  ) {}

  get title() {
    return this._title;
  }

  get summary() {
    return this._summary;
  }

  get notionKey() {
    return this._notionKey;
  }
}
