import FetchUserData from '../../get-data/FetchUserData';
import profileImage from '../../img/profileImg.png';
import './Profile.css';

function Profile() {
  // FetchUserData 호출로 데이터 가져오기
  const userData = FetchUserData();
  // 데이터가 업데이트되면 상태 업데이트

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
        <button type="button" className="button-login" href="/signin.html">
          로그인
        </button>
      )}
    </div>
  );
}

export default Profile;
