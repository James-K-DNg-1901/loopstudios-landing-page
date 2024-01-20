import logo from "../../assets/images/logo.svg";
import "./footer.scss";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

function Footer() {
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

  const contactList = [
    {
      id: 1,
      icon: facebook,
    },
    {
      id: 2,
      icon: twitter,
    },
    {
      id: 3,
      icon: pinterest,
    },
    {
      id: 4,
      icon: instagram,
    },
  ];

  return (
    <footer>
      <div className="page-footer">
        <img className="logo-style" src={logo} alt="img-logo" />
        <div className="footer-menu">
          {navElement.map((navElement) => (
            <div className="menu-element" key={navElement.id}>
              {navElement.selector}
            </div>
          ))}
        </div>
      </div>
      <div className="list-style">
        <div className="icon-list">
          {contactList.map((contactList) => (
            <div key={contactList.id}>
              <img
                className="contact-style"
                src={contactList.icon}
                alt="icon-social-media"
              />
            </div>
          ))}
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
