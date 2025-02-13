import { Client } from "../domain/Client";
import { addClient, getClient } from "../infra/cadastro.repository";

export const cadastroService = {
    add,
    get,
};

function add(client: Client) {
    client.document = !client.document ? "" : client.document;
    client.gender = client.gender ?? "";
    client.photo = client.photo ?? "https://picsum.photos/100";
    addClient(client)
        .then(res => {
            alert("sucesso");
        })
        .catch(error => {
            alert("Erro");
        });
}

async function get(id: string) {
    if (!id) throw new Error();
    return await getClient(id);
}
