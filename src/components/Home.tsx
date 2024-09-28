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
          <div className={styles.creatorDiv}>
            <div>
              <b className={styles.creator}>Creator</b>
            </div>
            <img src="creator.jpg" alt="" width="400" className={styles.img} />
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
