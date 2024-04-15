interface Menu {
  name: string;
  price: number;
  image: string;
}

const readMenu = () => {
  const menuList: Menu[] = [
    {
      name: "Nasi Goreng",
      price: 25000,
      image: "nasigoreng.jpg",
    },
    {
      name: "Mie Goreng",
      price: 20000,
      image: "miegoreng.jpg",
    },
  ];

  return (
    <ul>
      {menuList.map((menu, index) => (
        <li key={index}>
          <img src={menu.image} alt={menu.name} />
          <h3>{menu.name}</h3>
          <p>Rp. {menu.price}</p>
        </li>
      ))}
    </ul>
  );
};
