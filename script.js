const nameInput = document.getElementById("nameid")
const nameError = document.getElementById("name-error")

const surnameInput = document.getElementById("surnameid")
const surnameError = document.getElementById("surname-error")

const emailInput = document.getElementById("emailid")
const emailError = document.getElementById("email-error")

const passwordInput = document.getElementById("passwordid")
const passwordError = document.getElementById("password-error")

const confirmpasswordInput = document.getElementById("confirmpasswordid")
const confirmpasswordError = document.getElementById("confirmpassword-error")

const termsandpolicyInput = document.getElementById("termsandpolicyid")
const termsandpolicyError = document.getElementById("termsandpolicy-error")

const signupInput = document.getElementById("signupid")

signupInput.addEventListener("click", function() {
    console.log("Sign up button was clicked")
    let valid = true;

    if (nameInput.value === "") {
        console.log("Type your name")
        nameError.innerHTML = "*"
        valid = false
    } else {
        nameError.textContent = "";
    }

    if (surnameInput.value === "") {
        console.log("Type your surname")
        surnameError.innerHTML = "*"
        valid = false
    } else {
        surnameError.textContent = "";
    }

    if (emailInput.value === "") {
        console.log("Type your email")
        emailError.innerHTML = "*"
        valid = false
    } else {
        emailError.textContent = "";
    }

    if (passwordInput.value === "") {
        console.log("Type your password")
        passwordError.innerHTML = "*"
        valid = false
    } else {
        passwordError.textContent = "";
    }

    if (confirmpasswordInput.value === "") {
        console.log("Password do not match")
        confirmpasswordError.innerHTML = "*"
        valid = false
    } else {
        confirmpasswordError.textContent = "";
    }

    if (!termsandpolicyInput.checked) {
        console.log("Accept Terms and Policy")
        termsandpolicyError.innerHTML = "*"
        valid = false
    } else {
        termsandpolicyError.textContent = "";
    }

    if (valid) {
        window.location.href = "https://github.com/radekgl44";
    }


});