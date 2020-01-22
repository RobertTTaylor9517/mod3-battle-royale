let user_id
let team_id
let team = []
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
    clear(leftDiv);

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

    leftDiv.appendChild(form)
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
        team_id =json.id 
        nextChar();
    })
    .catch(err => alert(err))
}

function nextChar(){
    clear(leftDiv);

    let divChar = document.createElement("div")
    divChar.id = "character-create"

    let form = document.createElement("form")

    let inputName = document.createElement("input")
    inputName.type = "text"
    inputName.name = "char-name"
    inputName.setAttribute("placeholder", "Enter Character Name")
    let br1 = document.createElement("br")

    let inputFocus = document.createElement("select")
    inputFocus.name = "char-focus"
    let br2 = document.createElement("br")

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

    let charAtt = chooseAttacks();
    charAtt.name = "char-attack[]"
    console.log(charAtt)
    let br3 = document.createElement("br")

    let inputSubmit = document.createElement("input")
    inputSubmit.type = "submit"
    inputSubmit.value = "Submit"

    form.appendChild(inputName)
    form.appendChild(br1)
    form.appendChild(inputFocus)
    form.appendChild(br2)
    form.appendChild(charAtt)
    form.appendChild(br3)
    form.appendChild(inputSubmit)
    form.addEventListener("submit", createCharacter)

    divChar.appendChild(form)

    midDiv.appendChild(divChar)



}

function createCharacter(e){
    e.preventDefault();
    if(char_count < 4){
        let selectArray = []
        let element = e.target["char-attack[]"]
        for(let i=0;i<element.length;i++){
            if(element[i].selected){
                selectArray.push(element[i].value)
            }
        }

        let newC = {
            "name": e.target["char-name"].value,
            "focus": e.target["char-focus"].value,
            'health': 100,
            attacks: selectArray,
            team_id: team_id

        }

        // console.log(newC)

        fetch("http://localhost:3000/characters", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newC)
        })
        .then(resp => resp.json())
        .then(json => {
            char_count++
            team.push(json)
            renderCharacter(json)
            if(char_count === 4){
                fetchGame();
            }
        })
    }else{
        alert("You already have four characters")
    }

    e.target.reset();

}

function renderCharacter(char){
    console.log(char)
    let div = document.createElement("div")
    div.className = "character-card"

    let charH = document.createElement("p")
    charH.textContent = char.name

    let br = document.createElement("br")

    let span = document.createElement("span")
    span.textContent = `Health: ${char.health}`

    let focus = document.createElement("i")

    switch(char.focus){
        case 'fire':
            focus.className = "mdi mdi-fire"
            break;
        case 'ice':
            focus.className = "mdi mdi-snowflake"
            break;
        case 'earth':
            focus.className = "mdi mdi-basecamp"
            break;
        case 'water':
            focus.className = "mdi mdi-water"
            break;
    }

    console.log(focus)

    div.appendChild(charH)
    div.appendChild(span)
    div.appendChild(focus)

    leftDiv.appendChild(div)

}

function chooseAttacks(){
    let inputAttack = document.createElement("select")
    inputAttack.setAttribute("multiple", "multiple")

    attacks.forEach(attack => {
        var attackOp = document.createElement("option")
        attackOp.value = attack.id
        attackOp.textContent = attack.name
        inputAttack.appendChild(attackOp)
    })

    return inputAttack;
}

function clear(item){
    while(item.firstChild){
        item.removeChild(item.firstChild)
    }
}