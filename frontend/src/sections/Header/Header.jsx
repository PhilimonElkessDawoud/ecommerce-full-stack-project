import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import "./Header.css";
const Header = () => {
    return (
        <div className="navContainer static-top">
            <div className="container">
                <nav
                    id="navbar"
                    className="navbar navbar-expand-lg bg-body-tertiary"
                >
                    <div className="container-fluid">
                        <Link to="/hero" className="navbar-brand">
                            <div
                                style={{
                                    display: "flex",
                                    marginRight: "1rem",
                                }}
                            >
                                <img
                                    src="/assets/logo.jpg"
                                    className="logo"
                                    alt=""
                                />
                                <h3>Buy, Buy!</h3>
                            </div>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Categories
                                    </Link>
                                    <ul className="dropdown-menu disabled">
                                        <li>To be added</li>
                                        <li>To be added</li>
                                        <li>To be added </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignContent: "center",
                                        }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Search products, brands and categories"
                                        ></input>
                                        <button>
                                            <FaSearch
                                                size={25}
                                                style={{ paddingBottom: "5px" }}
                                            />
                                        </button>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Link to="/Email">
                                            Account <FaUser size={15} />
                                        </Link>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Link to="/">
                                            Cart <FaShoppingCart size={19} />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        >
                            {" "}
                        </input>
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
