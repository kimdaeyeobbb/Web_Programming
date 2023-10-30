const NAMES = ["Lim", "Jang", "Kim", "Hong"]
const kimToPark = (names) => {
    const kimIdx = names.indexOf("Kim");
    names[kimIdx] = "Park"
}

kimToPark(NAMES);
console.log(NAMES)