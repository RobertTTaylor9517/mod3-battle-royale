let dungeons
let selectDungeon
let play = false
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
   clear(midDiv)

   selectDungeon.floors.forEach(floor => {
       startFloor(floor);
   })
}

function startFloor(floor){
    play = true
    while(play === true){
        renderEnemies(floor)
        debugger;
    }

}

function renderEnemies(floor){
    floor.enemies.forEach(enemy => {
        let div = document.createElement("div")
        div.className = "enemy-card"

        let enemH = document.createElement("p")
        enemH.textContent = enemy.name

        let br = document.createElement("br")

        let span = document.createElement("span")
        span.textContent = `Health: ${enemy.health}`

        div.appendChild(enemH)
        div.appendChild(span)

        rightDiv.appendChild(div)
    })

}
