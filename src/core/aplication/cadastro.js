import {
    validaNome,
    validaEmail,
    validaTelefone,
    validaPassword,
    comparaSenha,
    validateRequired,
    validarDocumento,
  } from "../service/validator.js";

  import {Client} from "../domain/client.js"

  import {cadastroService} from "../service/cadastro.service.js"


validaNome();
validaEmail();
validaTelefone();
validaPassword();
comparaSenha();
validateRequired();
validarDocumento();
registrationForm();

function getFormClient() {

  const client = new Client()
  client.name = document.querySelector('#nomeInput').value
  client.phone = document.querySelector('#telefoneInput').value
  client.email = document.querySelector('#emailInput').value
  client.password = document.querySelector('#senhaInput').value
  client.picture = document.querySelector('#foto').value
  // client.type = document.querySelector('#tipoFisica').value
  // client.type = document.querySelector('#tipoJuridica').value
  // client.gender = document.querySelector('#genero').value
  // client.document = document.querySelector('#tipoCpf').value
  // client.document = document.querySelector('#tipoCnpj').value
  // client.document = document.querySelector('#documentoInput').value
  return client

}

function registrationForm() {

  const registerButton = document.querySelector('#registerButton')
  registerButton.addEventListener("click", () => {
    const client = getFormClient()
    console.log(client)
    cadastroService.add(client)

  })


}
