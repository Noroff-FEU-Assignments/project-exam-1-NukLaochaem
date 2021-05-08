const hamburger = document.querySelector(".fa-bars")
const nav = document.querySelector("nav")


hamburger.addEventListener("click", openClose)

function openClose(event){
    if(nav.style.display === "block"){
        nav.style.display = "none"
    } else {
        nav.style.display = "block"
    }
}



const fullName = document.querySelector("#full_name")
const nameError = document.querySelector(".fullname_error")

const email = document.querySelector("#email")
const emailError = document.querySelector(".email_error")

const subject = document.querySelector("#subject")
const subjectError = document.querySelector(".subject_error")

const message = document.querySelector("#message")
const messageError = document.querySelector(".message_error")


const form = document.querySelector(".contact_form")
const sumbit = document.querySelector("#sumbit_contact")

function validateCheck (event){
    event.preventDefault();

    if(checkLength(fullName.value, 4) === true) {
        nameError.style.display = "none";
    } else{
        nameError.style.display = "inline-block";
    }

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "inline-block"
    }

    if(checkLength(subject.value, 14)=== true){
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "inline-block"
    }

    if(checkLength(message.value, 24 ) === true){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "inline-block"
    }

};
form.addEventListener("submit", validateCheck);

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailPattern = regEx.test(email);
    return emailPattern;
}
