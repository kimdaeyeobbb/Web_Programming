var t = document.getElementById('form1');
t.onsubmit = function a() {
    console.log('form property');
    return false;
}


function b() {
    console.log('from addEEventListener');
    return false;
}
t.addEventListener('submit', b)