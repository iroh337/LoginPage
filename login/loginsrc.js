
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


