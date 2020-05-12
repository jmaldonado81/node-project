import { response } from "express"

const serverUrl = 'http://localhost:3000'
document.querySelector('form').addEventListener('submit',(e)=> {
    e.preventDefault()
    const formData = new FormData(e.target)
    fetch(serverUrl+'/contacts',{
        method:'POST'
        body:formData,
    })
    .then((response)=>response.text())
    .then((result) = {
        document.getElementById('result').textContent = result      
    })
    .catch((err)=> {
        console.error(err.message)
    })
})