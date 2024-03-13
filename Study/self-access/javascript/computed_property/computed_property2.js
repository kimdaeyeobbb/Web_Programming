const param = 'size'
const config = {
    [param]: 120,
    ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 80
}

console.log(config.size) // 120
console.log(config.mobileSize) // 80