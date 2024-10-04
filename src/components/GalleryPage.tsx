import styles from "./GalleryPage.module.css";

const Gellery = () => {
  return (
    <>
      <div className={styles.mensCard}>
        <div className={styles.gallerySelect}>
        <select className={styles.select}>
          <option value="value1">Art</option>
          <option value="value2">Photography</option>
          <option value="value3">Graphic Design</option>
        </select>
        <b className={styles.gallery}><u>Gallery</u></b>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Gellery;
