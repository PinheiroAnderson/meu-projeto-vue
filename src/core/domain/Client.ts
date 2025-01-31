export class Client {
    name: string;
    email: string;
    document?: string;
    telephone: string;
    gender?: string;
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
        this.typePerson = "";
        this.typeAccess = "";
        this.password = "";
        this.isActive = true;
    }
}
