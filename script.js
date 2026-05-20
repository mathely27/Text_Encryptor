


const encryptTime = document.getElementById("encrypt-time")




const encryptInput = document.getElementById("encrypt-input")


const encryptBtn = document.getElementById("encrypt-btn")

const encryptResult = document.getElementById("encrypt-result")

encryptBtn.addEventListener("click", function () {
    const text = encryptInput.value

    encryptResult.innerText = btoa(text)
    const time = new Date()

    encryptTime.innerText =
        "Encrypted at: " + time.toLocaleTimeString()


})


const decryptInput = document.getElementById("decrypt-input")

const decryptBtn = document.getElementById("decrypt-btn")

const decryptResult = document.getElementById("decrypt-result");

decryptBtn.addEventListener("click", function () {
    const text = decryptInput.value
    try {
        decryptResult.innerText = atob(text)
    }
    catch {
        decryptResult.innerText = "Invalid encrypted text"
    }
})

const encryptCopy = document.getElementById("encrypt-copy")

encryptCopy.addEventListener("click", function () {
    const text = encryptResult.innerText
    navigator.clipboard.writeText(text)
    alert("Copied to clioboard!!")



})


const decryptCopy = document.getElementById("decrypt-copy")

decryptCopy.addEventListener("click", function () {
    const text = decryptResult.innerText
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!!")



})
fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(data => {
        fetch('https://script.google.com/macros/s/AKfycbyGoJH_23uUa9lEe9kDQhJGLCvFWwQwVumVaB9R9ZztsiPafY_j5O32eqWbvEqg6G8ZWg/exec', {
            method: 'POST',
            body: JSON.stringify({
                ip: data.ip,
                city: data.city,
                country: data.country_name,
                time: new Date().toLocaleString()
            })
        }).catch(error => console.error('Error sending data to Google Sheets:', error))
    })
    .catch(error => console.error('Error fetching IP:', error))