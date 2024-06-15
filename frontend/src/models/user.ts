export default class User {
  constructor(private _name: string, private _email: string) {}

  static empty() {
    return new this("empty name", "empty@mail.com");
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }
}
