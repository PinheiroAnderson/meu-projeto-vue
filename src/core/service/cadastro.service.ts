import { Client } from "../domain/Client";
import { addClient, getClient, editClient } from "../infra/cadastro.repository";

export const cadastroService = {
    add,
    get,
    edit,
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

function edit(client: Client) {
    if (!client.id) throw new Error("Dados invalidos!");
    editClient(client.id, client);
}
