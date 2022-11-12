function dream(what?: string) {
  return "My dream is ".concat(what || "Front-End programmer");
}

console.log(dream("Back-End programmer"));
console.log(dream());
