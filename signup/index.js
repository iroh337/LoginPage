// import {firebaseConfig} from '../environments/'

const firebaseConfig =
{
    apiKey: "AIzaSyBukvaZG0EFZCEOMAs6IPdWoFiDu4jtYkg",
    authDomain: "database-teste-77e3e.firebaseapp.com",
    databaseURL: "https://database-teste-77e3e-default-rtdb.firebaseio.com",
    projectId: "database-teste-77e3e",
    storageBucket: "database-teste-77e3e.appspot.com",
    messagingSenderId: "1073454269311",
    appId: "1:1073454269311:web:3ba6d21f0287ee9f0a504a"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()


function entrar() {

    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email ou Password Incorretos!')
        return

    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()
            var user_data = {
                email : email,
                password : password,
                last_login : Date.now()
            }
            database_ref.child('users/' + user.uid).set(user_data)  
            alert('User Created!!')
        })
        .catch(function (error) {

            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}



function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
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