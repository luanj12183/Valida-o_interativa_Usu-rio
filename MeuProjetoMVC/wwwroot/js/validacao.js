const formulario = document.getElementById("meuformulario");
const ElementoErro = document.getElementById("erro");

formulario.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value;

    ElementoErro.textContent = "";
    let erros = [];

    if (nome === "") {
        erros.push("O campo (Nome) não pode estar vazio.");
    }

    if (!email.includes("@")) {
        erros.push("O (Email) deve conter o caractere '@'.");
    }

    if (idade === "" || Number(idade) <= 0) {
        erros.push("A (idade) precisa ser maior que 0 !!!");
    }

    if (erros.length > 0) {
        event.preventDefault();
        ElementoErro. textContent = erros.join(" | ");
    } else {
        alert("Formulário validado com sucesso ! Enviando para o servidor...");
    }
});