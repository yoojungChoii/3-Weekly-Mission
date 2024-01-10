import "./Navbar.css";
import linkbraryLogo from "./img/Linkbrary.png";

function Navbar() {
  return (
    <div class="header-top">
      <div class="logo">
        <img src={linkbraryLogo} alt="Linkbrary 로고" />
      </div>
      <div>
        <a class="button-login" href="/signin.html">
          로그인
        </a>
      </div>
    </div>
  );
}

export default Navbar;
