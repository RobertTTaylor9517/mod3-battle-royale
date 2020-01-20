let main = document.getElementById("main")
let user_id
let team 
let char_count = 0

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
        nextChar();
    })
    .catch(err => alert(err))
}

function nextChar(){
    clear(main);

    let form = document.createElement("form")

    let inputName = document.createElement("input")
    inputName.type = "text"
    inputName.name = "char-name"
    inputName.setAttribute("placeholder", "Enter Character Name")

    let inputFocus = document.createElement("select")
    inputFocus.name = "char-focus"

    let fire = document.createElement("option")
    fire.value = "fire"
    fire.textContent = "Fire"
    let ice = document.createElement("option")
    ice.value = "ice"
    ice.textContent = "Ice"
    let earth = document.createElement("option")
    earth.value = "earth"
    earth.textContent = "Earth"
    let water = document.createElement("option")
    water.value = "water"
    water.textContent = "Water"

    inputFocus.appendChild(fire)
    inputFocus.appendChild(ice)
    inputFocus.appendChild(earth)
    inputFocus.appendChild(water)

    let inputSubmit = document.createElement("input")
    inputSubmit.type = "submit"
    inputSubmit.value = "Submit"

    form.appendChild(inputName)
    form.appendChild(inputFocus)
    form.appendChild(inputSubmit)

    main.appendChild(form)



}

function createCharacter(e){
    e.preventDefault();

    let newC = {
        "name": e.target["char-name"].value,
        "focus": e.target["char-focus"].value,
        'health': 100,
        team_id: team.id
    }

}

function renderCharacter(){

}

function clear(item){
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}