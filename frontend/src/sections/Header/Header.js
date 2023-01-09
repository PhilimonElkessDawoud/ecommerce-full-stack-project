import './Header.css'
import { FaShoppingCart, FaUser, FaCaretDown, FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='nav-class'>

      <a href="/"><div style={{display: "flex", justifyContent: "center"}}><img src="/assets/logo.jpg" className="logo" alt=""/>Buy, Buy!</div></a>

      <div>
          <ul id="navbar">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/">Categories <FaCaretDown/></NavLink></li>

              <li>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <input type="text" placeholder="Search products, brands and categories"></input>
                  <button><FaSearch size={25} style={{paddingBottom: '5px'}}/></button>
                </div>
              </li>

              <li>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <NavLink to="/Email">Account <FaUser size={15}/></NavLink>
                </div>
              </li>

              <li>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <NavLink to="/">Cart <FaShoppingCart size={19}/></NavLink>
                </div>
              </li>

          </ul>
      </div>
    </nav>
  )
}

export default Header

