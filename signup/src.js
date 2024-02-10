
btn.addEventListener('click', function () {
    let gmail = document.querySelector("#email").value
    let senha = document.querySelector("#password").value
    var usuario = document.getElementById('usuario').value
    let tems = true

   

    // let divlist = document.querySelector(".list")
    let gmsg = document.querySelector('.logincriado')

    if (gmail === '' || senha === ''||usuario === ''){
        gmsg.style.color = "red"
        gmsg.innerHTML = "Preencha todos os dados!" 
    } else {
        if (!letraNumSimb(senha)) {
            tems = false
        }

        if (validate_email(gmail) == true && validate_password(senha) == true) {
            // divlist.innerHTML = ''
            gmsg.style.color = "green"
            gmsg.innerHTML = "Cadastro completo com sucesso!"


        } else {
            // divlist.innerHTML = ''
            gmsg.style.color = "red"
            gmsg.innerHTML = "Erro no Login! Siga os requisitos de senha e tente novamente!"
        }
    }
})

function mostrar(){
    let senha = document.querySelector("#password")
    let eye = document.querySelector(".olho")
    
    if(senha.type === "password"){
        senha.type = "text"
        eye.src = "../imges/eye-open.png"
    } else {
        senha.type = 'password'
        eye.src = "../imges/eye-close.png"
    }
}

function containsLetterNumberAndSymbol(str){
    return /[a-zA-Z]/.test(str) && /[0-9]/.test(str) && /[^a-zA-Z0-9]/.test(str)
}

function letraNumSimb(str) {
    return /[a-zA-Z]/.test(str) && /[0-9]/.test(str) && /[^a-zA-Z0-9]/.test(str)
}

function validate_email(email) {
    var filter = /^[^@]+@\w+(\.\w+)+\w$/
    if (filter.test(email)) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    // Senha deve ser maior que 6
    if (password.length < 6) {
        return false
    } else {
        return true
    }
}