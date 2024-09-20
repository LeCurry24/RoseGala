import { Outlet, Link } from "react-router-dom";
import styles from "./Layouts.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.homeProfileGallery}>
          <Link to="/">
            <button className={styles.layoutButtons}>Home</button>
          </Link>
          <Link to="/profile">
            <button className={styles.layoutButtons}>Profile</button>
          </Link>
          <Link to="/gallery">
            <button className={styles.layoutButtons}>Gallery</button>
          </Link>
          <Link to="/about">
            <button className={styles.layoutButtons}>About</button>
          </Link>
        </div>
        <div className={styles.signs}>
          <Link to="/sign-in">
            <button className={styles.layoutButtons}>Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className={styles.layoutButtons}>Sign Up</button>
          </Link>
          <button className={styles.layoutButtons}>Sign Out</button>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
