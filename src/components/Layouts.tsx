import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/men">
            <button>Men</button>
          </Link>
          <Link to="/women">
            <button>Women</button>
          </Link>
          <Link to="/kids">
            <button>Kids</button>
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
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
