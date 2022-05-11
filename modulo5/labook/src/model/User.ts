export default class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
  ) { }

  getIdUser = (): string => this.id;
  getName = (): string => this.name;
  getEmail = (): string => this.email;
  getPassword = (): string => this.password;
}