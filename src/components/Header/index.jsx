import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import { useState } from "react";

function Header() {
  const navElement = [
    {
      id: 1,
      selector: "About",
    },
    {
      id: 2,
      selector: "Coreers",
    },
    {
      id: 3,
      selector: "Events",
    },
    {
      id: 4,
      selector: "Products",
    },
    {
      id: 5,
      selector: "Support",
    },
  ];

  const [isActive, setActive] = useState(false);
  const [icon, setIcon] = useState(hamburger);

  const clickHandle = () => {
    setActive(!isActive);
    if (icon === hamburger) setIcon(close);
    else setIcon(hamburger);
  };

  return (
    <header>
      <div className="nav">
        <img className="logo" src={logo} alt="logo" />
        <div id="menu" className={isActive ? "show-menu" : "nav-menu"}>
          {navElement.map((navElement) => (
            <div key={navElement.id}>
              <div>{navElement.selector}</div>
            </div>
          ))}
        </div>
        <img
          className="mobile-menu"
          src={icon}
          alt="hamburger"
          onClick={() => clickHandle()}
        />
      </div>
      <h1 className="title">IMMERSIVE EXPERIENCES THAT DILIVER</h1>
    </header>
  );
}
export default Header;
