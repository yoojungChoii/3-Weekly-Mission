import avatarImage from '../../img/Avatar.png';
import Navbar from './Navbar';
import './Header.css';
import FetchFolderData from '../../get-data/FetchFolderData';
import SearchBar from '../SearchBar';

function Header() {
  const folderData = FetchFolderData();
  const imageUrl = folderData.folder?.owner?.profileImageSource;
  const ownerName = folderData?.folder?.owner?.name;
  const folderName = folderData?.folder?.name;

  return (
    <header>
      <Navbar />
      <div className="header-content">
        <div>
          {imageUrl ? (
            <img className="avatar-image" src={imageUrl} alt="아바타이미지" />
          ) : (
            <img src={avatarImage} alt="기본 아바타 이미지" />
          )}
        </div>
        <div>@{ownerName}</div>
        <div className="folder-name">{folderName}</div>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
