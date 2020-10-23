// function enviaContatoProBanco() {

//     var erros = validaContato();
//     mensagemErro.innerHTML = "";

//     if (erros.length > 0) {
//         for (var i = 0; i < erros.length; i++) {
//             var erro = erros[i];
//             var li = document.createElement("li");
//             li.innerHTML = erro;
//             mensagemErro.appendChild(li);
//         }
//     } else {
//         // Código que envia os dados
//         // para o BD
//     }
// }

// function validaContato() {
//     var erros = [];

//     if (!usuario.value) {
//         erros.push("Prencher nome de úsuario!");
//     }

//     if (!email.value ||
//         (email.value.search("@") == -1) ||
//         (email.value.search(".") == -1) ||
//         (email.value.search(" ") >= '')) {
//         erros.push("O formato do email é: usuario@dominio.com");
//     }

//     if (!senha.value || !senha.value == Senha_confimar.value) {
//         erros.push("Preencha a mensagem!")
//     }


//     return erros;
// }