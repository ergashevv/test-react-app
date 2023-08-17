import Homelogo from "../../assets/images/finilogo.svg";
import MainButton from "../button";
import "./header.scss";
const Header = () => {
  return (
    <>
      <header className="container-xxl">
        {" "}
        <div className="header container">
          <div className="header-logo">
            <a href="/">
              <img src={Homelogo} alt="Error" />
            </a>
          </div>
          <div className="head-r">
            <div className="header-links">
              <a href={"/"}>Home</a>
              <a href={"/"}>About us</a>
              <a href={"/"}>Features</a>
              <a href={"/"}>Pricing</a>
              <a href={"/"}>FAQ</a>
              <a href={"/"}>Blog</a>
            </div>
            <MainButton
              link={"/contact"}
              text={"About"}
              backgroundColor={"black"}
            />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
