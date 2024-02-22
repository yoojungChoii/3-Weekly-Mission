import styles from "./Body.module.css";
import SearchBar from "./SearchBar";
import Cards from "../UI/Card/Cards";

function Body() {
  return (
    <div className={styles.body}>
      <SearchBar />
      <Cards />
    </div>
  );
}

export default Body;
