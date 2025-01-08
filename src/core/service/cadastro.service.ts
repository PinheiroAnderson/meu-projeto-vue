import { Client } from "../domain/Client";
import { addClient } from "../infra/cadastro.repository";

export const cadastroService = {
    add
}

function add(client:Client) {
    addClient(client)
        .then(res => {
            console.log("adicionado", res)
            alert("sucesso")
        })
        .catch(error => {
            console.log("error: ", error)
            alert("Erro")
        })   
}

