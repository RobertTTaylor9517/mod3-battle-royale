let user
document.addEventListener("DOMContentLoaded",()=>{
    let userIn = document.getElementById("create-user")
    console.log(userIn)
    userIn.addEventListener("submit", addUser);
})

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
        console.log(user)
    })

}