
const encryptInput = document.getElementById("encrypt-input")


const encryptBtn = document.getElementById("encrypt-btn")

const encryptResult = document.getElementById("encrypt-result")

encryptBtn.addEventListener("click", function(){
    const text = encryptInput.value

    encryptResult.innerText = text

})

