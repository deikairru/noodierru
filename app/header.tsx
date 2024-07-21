export function Header() {
  return (
    <div className="header absolute top flex flex-row justify-between py-5 w-full border-2 border-blue-500 ">
      <div className="title flex justify-between">
        Foodie Noodie
      </div>

      <div className="nav flex flex-row justify-between space-x-4">
        <a href="#home">Home</a>
        <a href="services">Services</a>
        <a href="menu">Menu</a>
        <a href="About">About</a>
        <a href="contact">Contact</a>
      </div>
      <div className="cta flex flex-row justify-end space-x-4">
        <div className="search">Search</div>
        <div className="cart">Cart</div>
        <div className="login">Login</div>
      </div>
    </div>
  );
}