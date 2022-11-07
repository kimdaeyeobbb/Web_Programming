// 메서드를 생성자함수로 만들지 말고 프로토타입으로 분리할 것 

const koreanFood = ["비빔밥", "치킨", "갈비탕", "갈비찜", "찜닭", "닭한마리"]
const chineseFood = ["짜장면", "짬뽕", "탕수육", "깐풍기", "유린기", "볶음밥"]
const JapaneseFood = ["초밥", "소바", "라멘", "타꼬야끼"]

function FoodPickingSystem(food) {
    this.food = food;
}

FoodPickingSystem.prototype.foodChoice = function () {
    const chosenFood = food[Math.floor(Math.random() * food.length)]
    this.choice = function () {
        return (`이번에 추천할 음식은 ${chosenFood}입니다.`);
    }
}

const obj3 = new FoodPickingSystem();
console.log(obj3.__proto__ === FoodPickingSystem.prototype)   // true