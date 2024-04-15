interface Menu {
  name: string;
  price: number;
}

// 타입확장
interface DinnerMenu extends Menu {
  dessert: string;
}

let dinner: DinnerMenu = {
  name: "Salad",
  price: 10,
  dessert: "cake",
};

console.log(dinner); // { name: 'Salad', price: 10, dessert: 'cake' }

// 타입확장
interface LunchMenu extends Menu {
  drink: string;
}

let lunch: LunchMenu = {
  name: "Salad",
  price: 10,
  drink: "water",
};

console.log(lunch); // { name: 'Salad', price: 10, drink: 'water' }

// 타입확장
interface BreakfastMenu extends Menu {
  bread: string;
}

let breakfast: BreakfastMenu = {
  name: "Salad",
  price: 10,
  bread: "toast",
};

console.log(breakfast); // { name: 'Salad', price: 10, bread: 'toast' }

// 타입확장
interface SpecialMenu extends Menu {
  image: string; // 메뉴 클릭시 이미지 파일 띄움
}

interface OutOfStockMenu extends Menu {
  soldOut: boolean; // 품절 여부
}

const menu0: Menu = {
  name: "Salad",
  price: 10,
  image: "salad.jpg",
  // Object literal may only specify known properties, and image does not exist in type Men
};

const menu1: SpecialMenu = {
  name: "Salad",
  price: 10,
  image: "salad.jpg",
};
