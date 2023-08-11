import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <Link to="/">Pizza App</Link>
        <p>saurav</p>
        <Link to="/menu">Menu</Link>
      </header>
    );
}

export default Header

