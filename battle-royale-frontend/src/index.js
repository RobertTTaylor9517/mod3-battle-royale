let user
document.addEventListener("DOMContentLoaded",()=>{

    startApp();
})

function startApp(){
    let main = document.getElementById("main")
    let form = document.createElement("form")

    let input = document.createElement("input")
    input.type = "text"
    input.name = "username"
    input.setAttribute("placeholder", "Enter Username")

    let submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Submit"

    form.appendChild(input)
    form.appendChild(submit)
    form.addEventListener("submit", addUser)

    main.appendChild(form)

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

    let userH = document.createElement("h3")
    userH.textContent = "Choose User"
    main.appendChild(userH)

    json.forEach(use => {
        renderUser(use)
    })

}


function renderUser(use){

    let button = document.createElement("button")
    button.textContent = use.username
    button.dataset.userId = use.id 
    console.log(button)
    button.addEventListener("click",(e) => {
        let id = e.target.dataset.userId
        startNext(id)
    })

    let br = document.createElement("br")

    main.appendChild(button)
    main.appendChild(br)
}



