const Nav = () => {
  return (
    <div className="titleBar">
      <div>
        <img src="/images/brand_logo.png" alt="" />
      </div>
      <div className="navItems">
        <div>Menu</div>
        <div>Location</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <button className="loginBtn">Login</button>
    </div>
  );
};
export default Nav;
