type Heroes = "Hulk" | "Thor" | "Capt" | "IronMan";
type HeroesProfile = {
  [K in Heroes]: number;
};
const heroesProfile: HeroesProfile = {
  Hulk: 1,
  Thor: 2,
  Capt: 3,
  IronMan: 4,
};

console.log(heroesProfile); // { Hulk: 1, Thor: 2, Capt: 3, IronMan: 4 }
