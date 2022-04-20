const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Confirmpassword = document.getElementById("Confirmpassword");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const ConfirmpasswordValue = Confirmpassword.value.trim()

    if (firstnameValue === "") {
        alert("O campo Nome não pode ficar vazio.")
    }

    if (lastnameValue === "") {
        alert("O campo Sobrenome não pode ficar vazio.")
    }

    if (emailValue === "") {
        alert("O campo E-mail não pode ficar vazio.")
    }

    if (passwordValue === "") {
        alert("O campo Senha não pode ficar vazio.")
    }  else if(passwordValue.length < 6){
        alert("Sua senha deve possuir pelo menos 6 caracteres")
    }

    if (ConfirmpasswordValue != passwordValue) {
        alert("As senhas não são iguais")
    }

    alert("Conta cadastrada com sucesso!")
}