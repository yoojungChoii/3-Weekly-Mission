import styles from "./Body.module.css";
import SearchBar from "./SearchBar";
import CardList from "../UI/Card/CardList";

function Body() {
  return (
    <div className={styles.body}>
      <SearchBar />
      <CardList />
    </div>
  );
}

export default Body;
