export class Client {
  name: string;
  email: string;
  document?: string;
  telephone: string;
  gender: string;
  photo?: string;
  typePerson: string;
  typeAccess: string;
  password: string;
  isActive: boolean;

  constructor() {
    this.name = "";
    this.email = "";
    this.document = "";
    this.telephone = "";
    this.gender = "";
    this.photo = "";
    this.typePerson = "fisica";
    this.typeAccess = "client";
    this.password = "";
    this.isActive = true;
  }
}
