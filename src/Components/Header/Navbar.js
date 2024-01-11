import Profile from './Profile';
import linkbraryLogo from '../../img/Linkbrary.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={linkbraryLogo} alt="Linkbrary 로고" />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
