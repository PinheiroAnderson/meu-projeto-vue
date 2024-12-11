export function validaNome() {
  const element = document.querySelector("#nomeInput");
  const message = document.querySelector("#nomeHelp");
  if (!element) return;
  element.addEventListener("blur", (e) => {
    const value = e.target.value;
    let error = "";

    if (value == "") {
      error =
        '<span class="text-danger"> Preencha o campo de maneira correta! </span>';
    }

    message.innerHTML = error;
  });
}

export function validaEmail() {
  const element = document.querySelector("#emailInput");
  const message = document.querySelector("#emailHelp");
  if (!element) return;
  element.addEventListener("keyup", (e) => {
    const value = e.target.value;
    let error = "";
    const regexEmail = /^[a-z0-9_.=-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-.]{3})+$/g;

    if (!regexEmail.test(value)) {
      error = '<span class="text-danger">Insira um e-mail válido!</span>';
    }

    message.innerHTML = error;
  });
}

export function validaTelefone() {
  const element = document.querySelector("#telefoneInput");
  const message = document.querySelector("#telHelp");
  if (!element) return;

  element.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\(\d{2}\) \d{5})(\d)/, "$1-$2");
    value = value.substring(0, 15);

    if (value.length === 15) {
      message.innerHTML = "";
    } else {
      message.innerHTML =
        '<span class="text-danger">Telefone inválido! Formato correto: (XX) XXXXX-XXXX</span>';
    }

    e.target.value = value;
  });
}

export function validaPassword() {
  const element = document.querySelector("#senhaInput");
  const message = document.querySelector("#senhaHelp");
  if (!element) return;
  element.addEventListener("keyup", (e) => {
    const value = e.target.value;
    let error = "";
    const regexSenha = /^[A-Za-z\d@$!%*?&]{8,}$/g;

    if (!regexSenha.test(value)) {
      error = '<span class="text-danger">Senha inválida!</span>';
    }

    message.innerHTML = error;
  });
}

export function comparaSenha() {
  const senhaInput = document.querySelector("#senhaInput");
  const confirmaSenhaInput = document.querySelector("#confirmasenhaInput");
  const message = document.querySelector("#confirmaHelp");

  if (senhaInput && confirmaSenhaInput && message) {
    confirmaSenhaInput.addEventListener("keyup", comparaSenha);

    const senha = senhaInput.value;
    const confirma = confirmaSenhaInput.value;
    let error = "";

    if (senha !== confirma) {
      error = '<span class="text-danger">As senhas não coincidem.</span>';
    }

    message.innerHTML = error;
  }
}

export function validateRequired() {
  const elements = document.querySelectorAll("[required]");
  if (!elements) return;
}

export function validarDocumento() {
  const element = document.querySelector("#documentoInput");
  const message = document.querySelector("#documentHelp");
  const tipoCpf = document.querySelector("#tipoCpf");
  const tipoCnpj = document.querySelector("#tipoCnpj");
  if (!element) return;

  element.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    let error = "";

    if (tipoCpf.checked) {
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3}\.\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3}\.\d{3}\.\d{3})(\d)/, "$1-$2");
      value = value.substring(0, 14);

      const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!regexCpf.test(value)) {
        error = "CPF no formato XXX.XXX.XXX-XX.";
      }
    }

    if (tipoCnpj.checked) {
      value = value.replace(/(\d{2})(\d)/, "$1.$2");
      value = value.replace(/(\d{2}\.\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{2}\.\d{3}\.\d{3})(\d)/, "$1/$2");
      value = value.replace(/(\d{2}\.\d{3}\.\d{3}\/\d{4})(\d)/, "$1-$2");
      value = value.substring(0, 18);

      const regexCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
      if (!regexCnpj.test(value)) {
        error = "CNPJ no formato XX.XXX.XXX/XXXX-XX.";
      }
    }

    message.textContent = error;
    message.style.color = error ? "red" : "green";

    e.target.value = value;
  });
}
