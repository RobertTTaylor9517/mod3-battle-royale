let dungeons

document.addEventListener("DOMContentLoaded", ()=> {
    fetch("http://localhost:3000/dungeons")
    .then(resp => resp.json())
    .then(json => console.log(json))
})