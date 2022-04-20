const continueButton = document.getElementById("continue-button")

continueButton.addEventListener("click", (e) => {
    e.preventDefault()

    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const celular = document.getElementById("number")
    const confirmPassword = document.getElementById("Confirmpassword")
    const firstname = document.getElementById("firstname")
    const lastname = document.getElementById("lastname")

    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const celularValue = celular.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()

    if (emailValue == '') {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (passwordValue == '' || passwordValue.length <= 5) {
        password.classList.add("errorInput")
    } else {
        password.classList.remove("errorInput")
    }

    if (confirmPasswordValue == '' || passwordValue != confirmPasswordValue) {
        confirmPassword.classList.add("errorInput")
    } else {
        confirmPassword.classList.remove("errorInput")
    }

    if (emailValue.indexOf("@") == -1 || emailValue.indexOf(".") == -1 || emailValue.indexOf(".") + emailValue.indexOf("@") == 1) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (celularValue == '') {
        celular.classList.add("errorInput")
    } else {
        celular.classList.remove("errorInput")
    }

    if (!isNaN(celularValue) == true && celularValue.length == 11) {
        celular.classList.remove("errorInput")
    }

    if (firstnameValue == '') {
        firstname.classList.add("errorInput")
    } else {
        firstname.classList.remove("errorInput")
    }

    if (lastnameValue == '') {
        lastname.classList.add("errorInput")
    } else {
        lastname.classList.remove("errorInput")
    }

})