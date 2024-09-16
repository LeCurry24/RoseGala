import styles from "./Home.module.css";
import TopPicks from "./TopPicksList";

const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.specialscard}>
          <div className={styles.artTopPicks}>
            <p className={styles.topPicks}>Top 5 Picks</p>
            <select>
              <option value="value1">Art</option>
              <option value="value2">Photography</option>
              <option value="value3">Graphic Design</option>
            </select>
            <hr />
            <TopPicks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
