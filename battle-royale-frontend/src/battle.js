let dungeons
let selectDungeon
let j = 0
let i = 0
let play 
let currAttack = {}
let players = []

let main = document.getElementById("main")
let midDiv = document.createElement("div")
midDiv.setAttribute("align", "middle")
let rightDiv = document.createElement("div")
rightDiv.setAttribute("align", "right")
let leftDiv = document.createElement("div")
leftDiv.setAttribute("align", "left")
main.appendChild(midDiv)
main.appendChild(leftDiv)
main.appendChild(rightDiv)


function fetchGame(){
    fetch("http://localhost:3000/dungeons")
    .then(resp => resp.json())
    .then(json => {
        dungeons = json
        firstRender()
    })
}

function firstRender(){
    let del = document.getElementById("character-create")
    del.remove();
    dungeons.forEach(dungeon => {
        renderDungeon(dungeon)
    })



}

function renderDungeon(dungeon){
    let div = document.createElement("div")

    let button = document.createElement("button")
    button.dataset.dungId = dungeon.id 
    button.addEventListener("click", startDungeon)


    let hDunge = document.createElement("h3")
    hDunge.textContent = dungeon.name


    button.appendChild(hDunge)

    div.appendChild(button)

    midDiv.appendChild(div)
}

function startDungeon(e){
    console.log(e.target.parentNode)
    // debugger;
    let dungeID = parseInt(e.target.parentNode.dataset.dungId)
   selectDungeon = dungeons.find(element => element.id === dungeID)
   console.log(selectDungeon)
   clear(midDiv)

   startFloor()
}

function startFloor(){
    i = 0
    renderEnemies(selectDungeon.floors[j])
    startBattle()
    

}

function renderEnemies(floor){
    floor.enemies.forEach(enemy => {
        let div = document.createElement("div")
        div.className = "enemy-card"
        div.dataset.enemId = enemy.id

        let enemH = document.createElement("p")
        enemH.textContent = enemy.name

        let br = document.createElement("br")

        let span = document.createElement("span")
        span.textContent = "Health: "

        let spanh = document.createElement("span")
        spanh.textContent = enemy.health 
        spanh.className = "enemy-health"
        span.appendChild(spanh)

        div.appendChild(enemH)
        div.appendChild(span)

        rightDiv.appendChild(div)
    })

}

function startBattle(){
    players = document.querySelectorAll(".character-card")
    cAttack();

}

function cAttack(){
    let charId = players[i].dataset.charId
        // debugger;
    let active = team.find(char => char.id === parseInt(charId))
       
    createAttackList(active, players[i])

}

function createAttackList(active, playerCard){
    let tempAt = []

    let charN = document.createElement("h3")
    charN.textContent = `${playerCard.querySelector("p").textContent} attacks`
    let div = document.createElement("div")

    active.attacks.forEach(attack => {
        tempAt.push(attacks.find(att => att.id === parseInt(attack)))   
    })

    console.log(tempAt)

    tempAt.forEach(att => {
        let button = document.createElement("button")
        button.textContent = att.name
        button.addEventListener("click", selectTarget)
        button.dataset.damage = att.damage
        button.dataset.type = att.element

        div.appendChild(button)
    })
   
    midDiv.appendChild(charN)
    midDiv.appendChild(div)

}

function selectTarget(e){
    currAttack = {
       damage: parseInt(e.target.dataset.damage),
       element: e.target.dataset.type
    }

    let enemies = document.querySelectorAll(".enemy-card")

    enemies.forEach(enemy => {
        enemy.addEventListener("click", attackEnem)
    })
}

function attackEnem(e){
    let attacked = selectDungeon.floors[j].enemies.find(enem => enem.id === parseInt(e.target.dataset.enemId))

    debugger;

    if(attacked.weakness === currAttack.element){
        e.target.querySelector(".enemy-health").textContent = parseInt(e.target.querySelector(".enemy-health").textContent) - (currAttack.damage * 2)
        if(parseInt(e.target.querySelector(".enemy-health").textContent) <= 0){
            e.target.remove()
        } 
    }else{
        e.target.querySelector(".enemy-health").textContent = parseInt(e.target.querySelector(".enemy-health").textContent) - (currAttack.damage)
        if(parseInt(e.target.querySelector(".enemy-health").textContent) <= 0){
            e.target.remove()
        } 
    }

    i++
    clear(midDiv)
    cAttack();
}
