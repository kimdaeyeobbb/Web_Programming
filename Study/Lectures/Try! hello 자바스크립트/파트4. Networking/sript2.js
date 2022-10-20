var req = new XMLHttpRequest();
req.onreadystatechange = function a() {
    console.log(this.readyState, this.status);
    if (this.readyState == 4) {
        console.log(this.response)
        var data = JSON.parse(this.response)
        for (var i in data) {
            var t = document.getElementById('template').cloneNode(true)
            t.removeAttribute('id');
            t.children[0].innerText = data[i].id
            t.children[1].innerText = data[i].msg
            document.body.appendChild(t)
        }
    }
}

req.open("GET", "./jsondata.txt")
req.send();