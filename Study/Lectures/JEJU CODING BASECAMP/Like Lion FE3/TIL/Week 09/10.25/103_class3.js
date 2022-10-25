class FoodPicker {
    constructor(foodNames) {
        this.foodNames = foodNames;
    }

    sayMenu() {
        console.log(this.menu[Math.floor(Math.random() * (this.menu.length))]);
    }
}

let foodpicker = new FoodPicker(['짜장면', '짬뽕', '탕수육'])
foodpicker.sayMenu();