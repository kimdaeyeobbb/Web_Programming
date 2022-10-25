const koreanFood = ["비빔밥", "치킨", "갈비탕", "갈비찜", "찜닭", "닭한마리"]
const chineseFood = ["짜장면", "짬뽕", "탕수육", "깐풍기", "유린기", "볶음밥"]
const JapaneseFood = ["초밥", "소바", "라멘", "타꼬야끼"]

function FoodPickingSystem(food) {
    this.food = food;
    const chosenFood = food[Math.floor(Math.random() * food.length)]
    this.choice = function () {
        return (`이번에 추천할 음식은 ${chosenFood}입니다.`);
    };
}

let whatToEat = new FoodPickingSystem(koreanFood);
console.log(whatToEat.choice());


let whatToEat2 = new FoodPickingSystem(chineseFood);
console.log(whatToEat2.choice());

let whatToEat3 = new FoodPickingSystem(JapaneseFood);
console.log(whatToEat3.choice());