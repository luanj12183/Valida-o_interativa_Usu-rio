document.addEventListener("DOMContentLoaded", function() {
    
    const formulario = document.getElementById("meuformulario");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const idade = document.getElementById("idade");
    const ElementoErro = document.getElementById("erro");

    formulario.addEventListener("submit", function(event) {
        ElementoErro.textContent = "";
        let mensagemErro = "";

        if (nome.value.trim() === "") {
            mensagemErro += "• O campo Nome não pode estar vazio.\n";
        }

        if (!email.value.includes("@")) {
            mensagemErro += "• O Email deve conter o caractere '@'.\n";
        }

        if (idade.value <= 0 || idade.value === "") {
            mensagemErro += "• A idade precisa ser maior que 0.\n";
        }

        if (mensagemErro !== "") {
            event.preventDefault();
            ElementoErro.textContent = mensagemErro;
        } else {
            alert("Formulário validado com sucesso! Enviando para o servidor...");
        }
    });
});