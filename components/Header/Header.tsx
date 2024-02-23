import Navbar from "./Navbar";
import styles from "./Header.module.css";
import FetchFolderData from "../../get-data/FetchSharedData";
import Image from "next/image";

function Header() {
  const folderData = FetchFolderData();
  const imageUrl = folderData?.folder?.owner?.profileImageSource;
  const ownerName = folderData?.folder?.owner?.name;
  const folderName = folderData?.folder?.name;

  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles["header-content"]}>
        <div>
          {imageUrl ? (
            <img
              className={styles["avatar-image"]}
              src={imageUrl}
              alt="아바타이미지"
              width={60}
              height={60}
            />
          ) : (
            <Image
              src={"/Avatar.png"}
              alt="기본 아바타 이미지"
              width={60}
              height={60}
            />
          )}
        </div>
        <div>@{ownerName}</div>
        <div className={styles["folder-name"]}>{folderName}</div>
      </div>
    </header>
  );
}

export default Header;
