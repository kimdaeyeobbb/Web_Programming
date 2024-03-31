type Wrapper = {
  margin: string;
  padding: string;
};

type Card = {
  backgroundColor: string;
  padding: string;
};

type Whole = Wrapper | Card;

const cardItem: Whole = {
  margin: "10px",
  padding: "20px",
  backgroundColor: "blue",
};

console.log(cardItem); // { margin: '10px', padding: '20px', backgroundColor: 'blue' }
console.log(cardItem.padding); // 20px
// console.log(cardItem.margin); // error
