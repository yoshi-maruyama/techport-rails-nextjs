export default class Career {
  constructor(
    private _id: string,
    private _title: string,
    private _description: string,
    private _startedAt: string,
    private _endedAt?: string
  ) {}

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get startedAt() {
    return this._startedAt;
  }

  get endedAt() {
    return this._endedAt;
  }
}
