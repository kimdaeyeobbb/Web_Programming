function errFunc() {
    throw 'error';
    console.log('this code will not be executed');
}

function func() {
    try {
        console.log('try - 1')
        errFunc();
        console.log('try - 2')   // 실행되지 않음
    } finally {
        console.log('finally in function - this code will always be executed')
    }
}

try {
    console.log('try - 1')
    func();
    console.log('try - 2')
} catch (e) {
    console.log('catch error: ', e)   // 실행됨
} finally {
    console.log('finally - this code will always be executed')
}