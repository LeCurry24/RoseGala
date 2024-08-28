import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.benner}>
          <img src="../HomeBenner.png" className={styles.mainBenner} />
        </div>
        <div className={styles.specialscard}>
          <p className={styles.topPicks}>Top Picks</p>
        </div>
      </div>
    </>
  );
};

export default Home;
