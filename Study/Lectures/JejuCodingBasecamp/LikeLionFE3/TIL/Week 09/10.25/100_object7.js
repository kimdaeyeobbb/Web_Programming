const k = {
    name: "k",
    mbti: "ENTJ",
    likeIt: function () {
        console.log("뜨개질을 좋아해요!");
    },
    likeFood: function (food) {
        food.foodlist();
    },
};

const food = {
    favorite_food: ["알리오올리오", "마라탕"],
    foodlist: function () {
        console.log("제가 좋아하는 음식은 " + [...this.favorite_food] + "입니다.");
    },
};

k.likeFood(food);