let coworkers = ["nike", "adidas"];
document.write(coworkers[0]);

coworkers.push("new balance");
coworkers.push("puma");

document.write(coworkers);

let i = 0;
while (i < coworkers.length) {
  document.write(
    '<li><a href="https://www.nike.com/kr/ko_kr/' +
      coworkers[i] +
      '">' +
      coworkers[i] +
      "</a></li>"
  );
}
