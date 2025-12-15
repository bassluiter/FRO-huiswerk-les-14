import {NavLink} from "react-router-dom";
import logoMedium from '../../assets/logo-medium.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className="outer">
            <nav className="inner">
                <div className="img-wrapper">
                    <img src={logoMedium} alt="bedrijfs logo medium size" className="logo-medium"/>
                </div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-default'}>Home</NavLink></li>
                    <li><NavLink to="/alle-posts" className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-default'}>Alle Posts</NavLink></li>
                    <li><NavLink to="/nieuwe-post" className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-default'}>Nieuwe post maken</NavLink></li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;