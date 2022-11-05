interface Menu {
  name: string;
  price: number;
  onsale10: boolean;
}

interface SetMenu extends Menu {
  option: string;
}

const cakeSet10: SetMenu = {
  option: "cake",
}; // 에러

const cookieSet10: SetMenu = {
  name: "americano",
  price: 6000,
  onsale: true,
  option: "cookie",
};
