type BaseItem = {
  name: string | null;
  imageUrl: string | null;
  discountRate: number;
  stock: number;
};

type CartItem = BaseItem & {
  quantity: number;
};
