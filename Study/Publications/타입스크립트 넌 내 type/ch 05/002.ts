function food(price: number, name?: string): void {
  console.log(`${price},${name}`);
}

food(10000); //10000,undefined
