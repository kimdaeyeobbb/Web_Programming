interface BaseItem {
  name: string | null;
  imageUrl: string | null;
  discountRate: number;
  stock: number;
}

interface CartItem extends BaseItem {
  quantity: number;
}

interface OrderItem extends CartItem {
  isSoldOut: boolean;
  isSelected: boolean;
}

interface EventItem extends OrderItem {
  eventDate: Date;
  eventLocation: string;
}

const item: EventItem = {
  name: "test",
  imageUrl: "test",
  discountRate: 10,
  stock: 10,
  quantity: 1,
  isSoldOut: false,
  isSelected: false,
  eventDate: new Date(),
  eventLocation: "서울특별시 종로구",
};
