import dayjs from "dayjs";

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
    return this.formatDate(this._startedAt);
  }

  get endedAt() {
    return this.formatDate(this._endedAt);
  }

  private formatDate(date?: string) {
    if (date) {
      return dayjs(date).format("YY/MM");
    } else {
      return "Now";
    }
  }
}
