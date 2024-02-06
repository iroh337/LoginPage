
function mostrar(){
    let senha = document.querySelector(".senha")
    let eye = document.querySelector(".olho")
    
    if(senha.type === "password"){
        senha.type = "text"
        eye.src = "./imges/eye-open.png"
    } else {
        senha.type = 'password'
        eye.src = "./imges/eye-close.png"
    }
}



function logar(){

    let pegaUsuario = document.querySelector('.usuario').value
    let pegaSenha = document.querySelector('.senha').value

    let listaUsuario =  []
    let userValid= {
        login: '',
        pass: ''
    }
    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
    
    listaUsuario.forEach((item) => {
        if(pegaUsuario == item.login && pegaSenha == item.pass){
            userValid = {
                login: item.login,
                pass: item.pass
            }
        }
    })

    if(pegaUsuario == userValid.login && pegaSenha == userValid.pass){
        location.href = 'home.html'

    }else{
        let res= document.querySelector('.resposta')
        res.style.color = 'red' 
        res.innerHTML = 'Usuario ou senha incorreto(s).'
    }

    }

