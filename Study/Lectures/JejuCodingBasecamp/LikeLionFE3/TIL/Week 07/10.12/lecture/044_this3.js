let someone = {
    name: 'danny',
    whoAmI: function () {
        console.log(this);  // 함수가 자기자신을 가리킴
    }
}

someone.whoAmI();
// someone 자기자신이 나옴
// { name: 'danny', whoAmI: [Function: whoAmI] }
