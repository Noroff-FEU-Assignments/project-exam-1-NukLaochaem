const fullName = document.querySelector(".fullname_error")
const email = document.querySelector(".email_error")
const subject = document.querySelector(".subject_error")
const message = document.querySelector(".message_error")

const sumbit = document.querySelector("#sumbit_contact")
const form = document.querySelector(".contact_form")

function validateCheck (event){
    event.preventDefault();

    if(checkLength(fullName.value, 5) === true) {
        nameError.style.display = "none";
    } else{
        nameError.style.display = "inline-block";
        return;
    }
};

form.addEventListener("sumbit", validateCheck)



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