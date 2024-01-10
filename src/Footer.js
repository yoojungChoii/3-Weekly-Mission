import "./Footer.css";
import youtubeIcon from "./img/youtube.png";
import instagramIcon from "./img/instagram.png";
import twitterIcon from "./img/twitter.png";
import facebookIcon from "./img/facebook.png";

function Footer() {
  return (
    <>
      <div className="footer-company">ⓒcodeit - 2023</div>
      <div className="footer-center">
        <a href="/privacy">privacy Policy</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="sns">
        <a href="facebook.com" target="_blank">
          <img src={facebookIcon} alt="페이스북 로고" />
        </a>
        <a href="twitter.com" target="_blank">
          <img src={twitterIcon} alt="트위터 로고" />
        </a>
        <a href="youtube.com" target="_blank">
          <img src={youtubeIcon} alt="유튜브 로고" />
        </a>
        <a href="instagram.com" target="_blank">
          <img src={instagramIcon} alt="인스타그램 로고" />
        </a>
      </div>
    </>
  );
}

export default Footer;
