class FoodPicker {
    constructor(foodNames) {
        this.foodNames = foodNames;
    }

    sayMenu() {
        console.log(this.foodNames[Math.floor(Math.random() * (this.foodNames.length))]);
    }
}

let foodpicker = new FoodPicker(['짜장면', '짬뽕', '탕수육'])
foodpicker.sayMenu();