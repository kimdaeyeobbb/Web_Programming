// remove readonly from all properties

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type unlockedAccount = CreateMutable<LockedAccount>;

const account: unlockedAccount = {
  id: "id",
  name: "name",
};
console.log(account); // { id: 'id', name: 'name' }

account.id = "newId";
console.log(account); //  { id: 'newId', name: 'name' }
