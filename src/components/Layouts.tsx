import { Outlet, Link } from "react-router-dom";
import styles from "./Layouts.module.css"


const Layout = () => {
  return (
    <>
        <div className={styles.topBar}>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/gallery">
                    <button>Gallery</button>
                </Link>
            </div>
            <div>
                <Link to="/sign-in">
                    <button>Sign In</button>
                </Link>
                <Link to="/sign-up">
                    <button>Sign Up</button>
                </Link>
                <button>Sign Out</button>
            </div>
        </div>
        <div className={styles.outlet}>
            <Outlet />
        </div>
    </>
  );
};

export default Layout;
