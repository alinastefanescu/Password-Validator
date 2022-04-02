
// - modificam inputul de password
const passwordElement = document.querySelector ("#password")
const submitButton = document.querySelector ("#submitBtn")

passwordElement.addEventListener('input', function(){
const MIN_NUM_OF_PASSWORD_CHARACTERS = 6

// - numaram numarul de caractere din input
let passwordValue = passwordElement.value
    
// - comparam cu numarul minim 
const isCorrectPassword = passwordValue.length >= MIN_NUM_OF_PASSWORD_CHARACTERS 

// -  creeam un if/else prin care activam butonul de Submit
if (isCorrectPassword){
    console.log("facem enabled la butonul de submit")
    submitButton.removeAttribute('disabled')
    } else {
    console.log("facem disabled la butonul de submit")
    submitButton.setAttribute('disabled', 'true')
    }
})

submitButton.addEventListener('click', function(){
    alert("Bine ai revenit!")
})