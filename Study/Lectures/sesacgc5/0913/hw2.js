const hong = {id:1, name:"Hong"}
const lee = {id:2, name:"Lee"}

function printA(user){
    console.log(`user id: ${user.id}, user name: ${user.name}`)
    return user
}

console.log(printA(hong))
console.log(printA(lee))

const printB = (user) => {
    console.log(`user id: ${user['id']}, user name: ${user['name']}`)
    return user
}


console.log(printB(hong))
console.log(printB(lee))

const printC = function (user){
    console.log()
    return user
}


console.log(printC(hong))
console.log(printC(lee))
