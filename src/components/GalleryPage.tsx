import styles from "./GalleryPage.module.css";

const Gellery = () => {
  return (
    <>
      <div className={styles.mensCard}>
        <b className={styles.gallery}>Gallery</b>
        <select>
          <option value="value1">Art</option>
          <option value="value2">Photography</option>
          <option value="value3">Graphic Design</option>
        </select>
        <hr />
      </div>
    </>
  );
};

export default Gellery;
