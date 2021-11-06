import "./Navbar.scss";
import logo from "../Images/netflix-logo.png";
const Navbar = () => {
    return (
        <div className="navbar container-fluid">
            <div className="nav-links row">
                <ul className="col-md-11 col-11 nav-ul">
                    <div className="logo">
                        <img className="logo-img" src={logo} alt="" />
                    </div>
                    <div className="buttons">
                        <li className="nav-list">
                            <button className="lang-btn">English ^</button>
                        </li>
                        <li className="nav-list">
                            <button className="signin-btn">Sign In</button>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
