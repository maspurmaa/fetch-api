import { Link } from "react-router";

export default function Navbar() {
  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Cart",
      path: "/cart",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="container vw-full flex justify-between items-center py-4 bg-green-600 w-full text-white">
      <Link to="/" className="text-2xl font-bold">
        Tokomedia
      </Link>
      <ul className="flex gap-5 ">
        {menus.map((menu) => (
          <li key={menu.name}>
            <Link to={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
