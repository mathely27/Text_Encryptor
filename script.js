
const encryptInput = document.getElementById("encrypt-input")


const encryptBtn = document.getElementById("encrypt-btn")

const encryptResult = document.getElementById("encrypt-result")

encryptBtn.addEventListener("click", function(){
    const text = encryptInput.value

    encryptResult.innerText = btoa(text)

})


const decryptInput=document.getElementById("decrypt-input")

const decryptBtn=document.getElementById("decrypt-btn")

const decryptResult=document.getElementById("decrypt-result");

decryptBtn.addEventListener("click",function(){
    const text= decryptInput.value
    try{
    decryptResult.innerText=atob(text)
    }
    catch{
        decryptResult.innerText = "Invalid encrypted text"
    }
})

const copyBtn=document.getElementById("copy-btn")

copyBtn.addEventListener("click",function(){
    const text = encryptResult.innerText
    navigator.clipboard.writeText(text)
    alert("Copied ti clioboard!!")
    
    

})

// encryptInput.addEventListener("keydown", function(event){

//     event.preventDefault()
//     if(event.key=="Enter"){
//         const text = encryptInput.value

//         encryptResult.innerText = btoa(text)

//     }

// })