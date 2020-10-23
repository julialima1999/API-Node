function ir_cadastro() {
    document.getElementById("entrar").style.display = 'none';
    document.getElementById("cadastro").style.display = 'block';
}

function ir_login() {
    document.getElementById("cadastro").style.display = 'none';
    document.getElementById("entrar").style.display = 'block';
}


function cadastro() {
    var c_email = (email.value);
    var valido_email = c_email.indexOf("@") >= 0 && c_email.indexOf(".") >= 0 && c_email.length > 7;
    var c_usuario = (usuario.value);
    var c_senha = (senha.value);
    var c_confirmSenha = (confirm_senha.value) == c_senha;

    alert((valido_email) ? 'E-mail ok' : "E-mail invalido");
}

/* Funções gavetas page_use */

function fechar_gaveta3() {
    document.getElementById("gaveta3").style.width = "4%";
    document.getElementById("galeria_dicas").style.display = "none";
    document.getElementById("galeria_tutoriais").style.display = "block";
    document.getElementById("galeria_video").style.display = "none";
    document.getElementById("fechar_gaveta3").style.display = "none";
    document.getElementById("abrir_gaveta3").style.display = "block";
    document.getElementById("abrir_gaveta2").style.display = "none";
    document.getElementById("abrir_gaveta1").style.display = "none";
}

function fechar_gaveta2() {
    document.getElementById("gaveta3").style.width = "4%";
    document.getElementById("gaveta2").style.width = "8%";
    document.getElementById("galeria_dicas").style.display = "block";
    document.getElementById("galeria_tutoriais").style.display = "none";
    document.getElementById("galeria_video").style.display = "none";
    document.getElementById("fechar_gaveta3").style.display = "none";
    document.getElementById("fechar_gaveta2").style.display = "none";
    document.getElementById("abrir_gaveta3").style.display = "block";
    document.getElementById("abrir_gaveta2").style.display = "block";
    document.getElementById("abrir_gaveta1").style.display = "none";
}

function fechar_gaveta1() {
    document.getElementById("gaveta3").style.width = "4%";
    document.getElementById("gaveta2").style.width = "8%";
    document.getElementById("gaveta1").style.width = "12%";
    document.getElementById("galeria_dicas").style.display = "none";
    document.getElementById("galeria_tutoriais").style.display = "none";
    document.getElementById("galeria_video").style.display = "none";
    document.getElementById("fechar_gaveta3").style.display = "none";
    document.getElementById("fechar_gaveta2").style.display = "none";
    document.getElementById("fechar_gaveta1").style.display = "none";
    document.getElementById("abrir_gaveta3").style.display = "block";
    document.getElementById("abrir_gaveta2").style.display = "block";
    document.getElementById("abrir_gaveta1").style.display = "block";
}

function abrir_gaveta3() {
    document.getElementById("gaveta3").style.width = "86%";
    document.getElementById("gaveta2").style.width = "90%";
    document.getElementById("gaveta1").style.width = "94%";
    document.getElementById("galeria_dicas").style.display = "none";
    document.getElementById("galeria_tutoriais").style.display = "none";
    document.getElementById("galeria_video").style.display = "block";
    document.getElementById("fechar_gaveta3").style.display = "block";
    document.getElementById("fechar_gaveta2").style.display = "block";
    document.getElementById("fechar_gaveta1").style.display = "block";
    document.getElementById("abrir_gaveta3").style.display = "none";
    document.getElementById("abrir_gaveta2").style.display = "none";
    document.getElementById("abrir_gaveta1").style.display = "none";

}

function abrir_gaveta2() {
    document.getElementById("gaveta2").style.width = "90%";
    document.getElementById("gaveta1").style.width = "94%";
    document.getElementById("galeria_dicas").style.display = "none";
    document.getElementById("galeria_tutoriais").style.display = "block";
    document.getElementById("galeria_video").style.display = "none";
    document.getElementById("fechar_gaveta2").style.display = "block";
    document.getElementById("fechar_gaveta1").style.display = "block";
    document.getElementById("abrir_gaveta2").style.display = "none";
    document.getElementById("abrir_gaveta1").style.display = "none";
}

function abrir_gaveta1() {
    document.getElementById("gaveta1").style.width = "94%";
    document.getElementById("galeria_dicas").style.display = "block";
    document.getElementById("galeria_tutoriais").style.display = "none";
    document.getElementById("galeria_video").style.display = "none";
    document.getElementById("fechar_gaveta1").style.display = "block";
    document.getElementById("abrir_gaveta1").style.display = "none";
}
// 

function sair_page() {
    document.getElementById("sair").style.width = '450px';
    // document.getElementById("cadastro").style.display = 'none';
}

function fechar_sair_page() {
    document.getElementById("sair").style.width = '0px';

}