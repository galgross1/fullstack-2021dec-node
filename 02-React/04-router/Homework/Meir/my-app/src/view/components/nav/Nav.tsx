import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="link">Home</div>
      </Link>
      <Link to="/products">
        <div className="link">Products</div>
      </Link>
      <Link to="/profile">
        <div className="link">Profile</div>
      </Link>
      <Link to="/babaSali">
        <div className="link">BabaSali</div>
      </Link>
    </div>
  );
};
