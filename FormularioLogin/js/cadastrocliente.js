let botaoCons = document.getElementById('botaoConsultar');
let botaoUp = document.getElementById('botaoAtualizar');
let botaoDel = document.getElementById('botaoDeletar');
let botaoCad = document.getElementById('botaoCadastrar');

botaoCad.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.getElementById('nome').value != '' &&
        document.getElementById('cep').value != '' &&
        document.getElementById('email').value != '') {
        cadastro()
    }
    else {
        alert('Preencha os dados')
        document.getElementById('nome').focus()
    }
}
)


