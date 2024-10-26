let userName = getFirstName("carlos kleber de sousa")

console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[1]
    return firstName

}
// exemplo 2

let namee = getFirstName("carlos-kleber-de-sousa", "-")

console.log("Seja bem vindo " + namee)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[1]
    return firstName

}
