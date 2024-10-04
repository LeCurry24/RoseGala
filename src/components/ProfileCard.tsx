import styles from "./ProfileCardStyle.module.css";

const profileCard = () => {
  return (
    /* From Uiverse.io by Yaya12085 */

    <div className={styles.card}>
      <div className={styles.infos}>
        <div className={styles.image}></div>
        <div className={styles.info}>
          <div>
            <p className={styles.name}>John Doe</p>
            <p className={styles.function}>Front-end dev</p>
          </div>
          <div className={styles.stats}>
            <p className="flex flex-col">
              Articles
              <span className={styles.stateValue}>34</span>
            </p>
          </div>
        </div>
      </div>
      <button className={styles.request} type="button">
        Add friend
      </button>
    </div>
  );
};
export default profileCard;
