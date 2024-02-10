
import { firebaseConfig } from "../environment/environments.js";


console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()


var btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email ou senha fora de formato!!')
      return

    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
    
      var user = auth.currentUser
  
   
      var database_ref = database.ref()
  
  
      var user_data = {
        last_login : Date.now()
      }
  
      database_ref.child('users/' + user.uid).update(user_data)
  
      location.href = "../home.html"
  
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
       
      let answer = document.querySelector('.resposta')
      answer.style.color = 'red'
      answer.innerHTML = 'Email ou senha incorreto!!  '
    })
  }
)


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
    if (password < 6) {
        return false
    } else {
        return true
    }
}
function validate_user(usuario) {
    // Senha deve ser maior que 6
    if (usuario < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}
function letraNumSimb(str){
    return /[a-zA-Z]/.test(str) && /[0-9]/.test(str) && /[^a-zA-Z0-9]/.test(str)
}
