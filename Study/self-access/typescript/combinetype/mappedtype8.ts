// remove optional attributes

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

// error- Type { id: string; } is missing the following properties from type Concrete<MaybeUser>: name, age
const user: User = {
  id: "id",
};
