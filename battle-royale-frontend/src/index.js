let user
let mainDiv
document.addEventListener("DOMContentLoaded",()=>{

    startApp();
})

function startApp(){
    mainDiv = document.createElement("div")
    mainDiv.className = "centered"

    let form = document.createElement("form")
    form.className = "centered"

    let input = document.createElement("input")
    input.type = "text"
    input.name = "username"
    input.setAttribute("placeholder", "Enter Username")

    let submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Submit"

    let br = document.createElement("br")

    form.appendChild(input)
    form.appendChild(submit)
    form.addEventListener("submit", addUser)

    mainDiv.appendChild(form)
    mainDiv.appendChild(br)
    
    midDiv.appendChild(mainDiv)

    fetchUsers()
}

function addUser(e){
    console.log(e.target)
    e.preventDefault();

    let username = e.target["username"].value
    console.log(username)

    let pack = {
        username: username
    }

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(pack)
    })
    .then(resp => resp.json())
    .then(json => {
        user = json
        renderUser(user)
    })
    .catch(err => alert(err))

    e.target.reset()
}

function fetchUsers(){
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(json => renderUsers(json))
    .catch(err => alert(err))
}

function renderUsers(json){
    let main = document.getElementById("main")

    let userDiv = document.createElement("div")
    userDiv.className = "title centeredAl"
    userDiv.setAttribute("align", "center")
    let userH = document.createElement("h3")
    userH.textContent = "Choose User"

    userDiv.appendChild(userH)
    mainDiv.appendChild(userDiv)
    json.forEach(use => {
        renderUser(use)
    })

}


function renderUser(use){

    let div = document.createElement("div")
    // div.className = "centered"

    let button = document.createElement("button")
    button.textContent = use.username
    button.dataset.userId = use.id 
    console.log(button)

    let delButton = document.createElement("button")
    delButton.textContent = "X"
    delButton.dataset.userId = use.id 
    delButton.addEventListener("click", delUser)

    button.addEventListener("click",(e) => {
        user = e.target.dataset.userId
        startNext(user)
    })

   
    div.appendChild(button)
    div.appendChild(delButton)
    mainDiv.appendChild(div)
}

function delUser(e){
    fetch(`http://localhost:3000/users/${e.target.dataset.userId}`, {
        method: "DELETE"
    })
    .then(resp => resp.text())
    .then(text => {
        e.target.parentNode.remove()
    })
}



