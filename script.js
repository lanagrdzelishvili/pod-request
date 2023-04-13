const email=document.getElementById("email")
const form=document.getElementById("submitt")
const error=document.getElementById("error")

form.addEventListener('submit' function(event) {
    event.preventDefault()

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.style.display='flex'
    }
    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.style.display='none'
    }
}) 