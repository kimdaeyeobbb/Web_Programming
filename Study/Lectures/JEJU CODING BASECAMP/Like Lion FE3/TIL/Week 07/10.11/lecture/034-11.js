/* 재귀함수 & 문자열 뒤집기 */
function reverse(txt) {
    if (txt.length === 1) {
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}

console.log(reverse('world'))


/*
n                     txt.length <= 1        return 
reverse('wolrd')      false                  reverse(txt.slice(1)) + w = dlrow
reverse('orld')       false                  reverse(txt.slice(1)) + o = dlro
reverse('rld')        false                  reverse(txt.slice(1)) + r = dlr
reverse('ld')         false                  reverse(txt.slice(1)) + l = dl
reverse('d')          true                   d

*/