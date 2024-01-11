import { useState, useEffect } from "react";
import getUser from "../get-data/getUser";
import profileImage from "../img/profileImg.png";
import "./Profile.css";

function Profile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUser(setUserData);
  }, []);

  return (
    <div>
      {userData ? (
        <div className="profile">
          <div>
            <img src={profileImage} alt="프로필이미지" />
          </div>
          <div>{userData.email}</div>
        </div>
      ) : (
        <button className="button-login" href="/signin.html">
          로그인
        </button>
      )}
    </div>
  );
}

export default Profile;
