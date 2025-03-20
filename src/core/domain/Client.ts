export class Client {
    id: string;
    name: string;
    email: string;
    telephone: string;
    photo: string | File;
    password: string;
    isActive: boolean;

    constructor() {
        this.id = "";
        this.name = "";
        this.email = "";
        this.telephone = "";
        this.photo = "";
        this.password = "";
        this.isActive = true;
    }
}
export type EditableClient = Pick<
    Client,
    "id" | "name" | "telephone" | "photo"
>;
