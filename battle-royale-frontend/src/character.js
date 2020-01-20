let main = document.getElementById("main")
let user_id
let team 

class Character{
    constructor(name, focus, team_id){
        this.name = name
        this.health = 100
        this.focus = focus
        this.team_id = team_id
    }

}

function startNext(id){
    user_id = id 
    console.log(user_id)
    clear(main);

    let form = document.createElement("form")

    let input = document.createElement("input")
    input.type = "text"
    input.name = "team_name"
    input.setAttribute("placeholder", "Enter Team Name")
    
    let submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Submit"



    form.appendChild(input)
    form.appendChild(submit)

    form.addEventListener("submit", createTeam)

    main.appendChild(form)
}

function createTeam(e){
    e.preventDefault()

    let entry = e.target["team_name"].value
    let newT = {
        'name': entry,
        user_id: user_id
    }

    console.log(newT)

    fetch("http://localhost:3000/teams",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(newT)
    })
    .then(resp => resp.json())
    .then(json => {
        console.log(json)
        team = json
    })
    .catch(err => alert(err))
}

function nextChar(){
    clear(main)
}

function createCharacter(){

}

function clear(item){
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}