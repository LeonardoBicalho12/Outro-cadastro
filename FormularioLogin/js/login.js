/* criando o evento do botão */
document.getElementById('botaoEntrar')
        .addEventListener('click',(e) =>{
            e.preventDefault();
        });

document.getElementById('botaoCadastro')
.addEventListener('click', (e)=>{
    e.preventDefault();
    window.open("../assets/cadastroUsuario.html")
    window.close
});

function verifica(){
    //pegando os valores do input email e senha
    let email = document.getElementById('username').value;
    let senha = document.getElementById('password').value;
    
    if(email == "" || senha == "") {
        alert("Obrigatório o preenchinento do email e senha");
        document.getElementById('usernmae').focus(); 
    }else{
        consultar(email,senha);
    }

};

function consultar(email,senha){
    let usuarios = new Array();//aqui estamos

    //verificando se a chave usuarios existe no localStorage
    if(localStorage.hasOwnProperty("usuarios")){
        //recuperar os valores da propriedade usuarios do localStorage
        //Convertendo o USUARIOS em objeto para podermos usar as propriedades

        usuarios = JSON.parse(localStorage.getItem('usuarios')) //parse = converter

    }
    for(let i = 0;i<usuarios.length;i++){

        if(usuarios[i].email == email && usuarios[i].senha == senha){
        window.open('../assets/index.html');
        window.close();
        break;
    }

    }
}
alert("Email ou senha inválido")
document.getElementById('username').focus()
