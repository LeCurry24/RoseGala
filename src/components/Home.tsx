import styles from "./Home.module.css";
import TopPicks from "./TopPicksList";

const Home = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.specialscard}>
          <p className={styles.topPicks}>Top Picks: Painting Art</p>
          <TopPicks/>
          <p className={styles.topPicks}>Top Picks: Photography</p>
          <TopPicks/>
        </div>
      {/* <div>
        <p>
          Welcome to Rose Gala, your premier destination for celebrating the 
          diverse world of art through photography, paintings, and drawings. Our
          gallery app is designed to immerse you in a rich tapestry of creative
          expression, where every piece tells its own unique story. At Rose
          Gala, we believe that art is not only for viewing but for
          experiencing. That’s why we offer features that let you actively
          engage with the artwork. Cast your vote for your favorite pieces,
          explore the top picks selected by the community, and curate your
          personal collection of favorite art. Whether you're an art aficionado
          or just discovering your artistic tastes, Rose Gala invites you to
          connect with art in a way that's both interactive and inspiring. Join
          us on this creative journey and let your appreciation for art shine!
        </p>
      </div> */}
      </div>
    </>
  );
};

export default Home;
