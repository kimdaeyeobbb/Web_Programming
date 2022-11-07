var someone = {
    name: "danny",
    whoAmI: function () {
        console.log(this); // 함수가 자기자신을 가리킴
    }
};

someone.whoAmI();   // someone이 whoAmI를  호출

var myWhoAmI = someone.whoAmI;
myWhoAmI(); // 브라우저(window)가 호출
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

var bindedWhoAmI = myWhoAmI.bind(someone);  // someone을 this로 고정시킴
bindedWhoAmI();  // {name: 'danny', whoAmI: ƒ}

var btn = document.getElementById('btn');
btn.addEventListener('click', someone.whoAmI)