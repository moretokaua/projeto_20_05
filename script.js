function login() {
    var usuario = document.querySelector('#usuario');
    var senha = document.querySelector('#senha');
    if ((usuario === null || usuario === void 0 ? void 0 : usuario.value) == 'adm' && (senha === null || senha === void 0 ? void 0 : senha.value) == '123') {
        alert('foi caceteee');
    }
    else {
        alert('usuario ou senha errados idiota');
    }
}
