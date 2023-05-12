function login(){
    let usuario : HTMLInputElement | null =
    document.querySelector('#usuario');
    let senha : HTMLInputElement | null =
    document.querySelector('#senha');

    if(usuario?.value == 'adm' && senha?.value == '123'){
        alert('foi caceteee');
    }
    else{
        alert('usuario ou senha errados idiota');
    }
}
