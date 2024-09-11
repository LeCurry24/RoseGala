import styles from "./Home.module.css";
import TopPicks from "./TopPicksList";

const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.specialscard}>
          <div className={styles.artTopPicks}>
          <p className={styles.topPicks}>Top Picks: Painting Art</p>
          <TopPicks/></div>
          <div className={styles.photoTopPicks}>
          <p className={styles.topPicks}>Top Picks: Photography</p>
          <TopPicks/></div>
        </div>
      </div>
    </>
  );
};

export default Home;
