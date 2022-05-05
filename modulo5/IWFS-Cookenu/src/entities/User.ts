export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) { }

  static toUserModel(data: any): User {
    return new User(data.id, data.name, data.email, data.password, data.role);
  }

  getId = (): string => this.id;
  getName = (): string => this.name;
  getEmail = (): string => this.email;
  getPassword = (): string => this.password;
  getRole = (): USER_ROLES => this.role;

}