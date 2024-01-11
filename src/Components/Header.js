import avatarImage from "../img/Avatar.png";
import Navbar from "./Navbar";
import "./Header.css";
import getFolder from "../get-data/getFolder";

const Header = () => (
  <header>
    <Navbar />
    <div className="header-content">
      <div>
        <img src={avatarImage} alt="아바타이미지" />
      </div>
      <div>@{getFolder.name}</div>
      <div>{getFolder.folder}</div>
    </div>
  </header>
);

export default Header;
