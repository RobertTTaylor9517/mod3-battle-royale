let attacks 

class Attack{
    constructor(id, name, damage, element){
        this.id = id
        this.name = name
        this.damage = damage
        this.element = element
    }
}

function fetchAttacks(){
    fetch('http://localhost:3000/attacks')
    .then(resp => resp.json())
    .then(json => {
        attacks = json;
        console.log(attacks)
    })
}

document.addEventListener("DOMContentLoaded", ()=> {
    fetchAttacks();
})