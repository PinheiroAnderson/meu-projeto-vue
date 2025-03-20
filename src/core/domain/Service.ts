export class Service {
    id: string;
    nome: string;
    valor: string;
    descricao: string;
    descricaoCompleta: string;
    fotos?: string;
    duracao: string | number;

    constructor(data: Partial<Service> = {}) {
        this.id = data.id || "";
        this.nome = data.nome || "";
        this.valor = data.valor || "";
        this.descricao = data.descricao || "";
        this.descricaoCompleta = data.descricaoCompleta || "";
        this.fotos = data.fotos || "";
        this.duracao = data.duracao || "";
    }
}
