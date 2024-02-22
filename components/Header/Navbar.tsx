import Profile from "./Profile";
import styles from "./Navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["logo"]}>
        <Image
          src={"/Linkbrary.png"}
          alt="Linkbrary 로고"
          width={133}
          height={24}
        />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
