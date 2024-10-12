import styles from "./Home.module.css";
import TopPicks from "./TopPicksList";
import HomeSelect from "./HomeSelect";

const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.specialscard}>
          <div className={styles.artTopPicks}>
            <div className={styles.topSelect}>
              <HomeSelect/>
              <p className={styles.topPicks}><u>Top 5 Picks</u></p>
            </div>
            <hr />
            <TopPicks />
          </div>
          <div>
            <b className={styles.creator}>
              <u>Creator</u>
            </b>
          </div>
          <div className={styles.creatorDiv}>
            <img src="creator.jpg" alt="" width="600" className={styles.img} />
            <p className={styles.creatorStatement}>
              Jaylen Curry is a talented graphic designer and software developer
              who created Rose Gala. The site reflects Jaylen's unique
              combination of technical and creative skills, offering a polished
              platform for showcasing visual art. His work blends aesthetics and
              functionality, ensuring an engaging user experience. He has a
              personal connection to Jen, his teacher's wife, who plays a role
              in the inspiration or vision behind the project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
