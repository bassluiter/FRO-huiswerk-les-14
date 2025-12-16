import {NavLink} from "react-router-dom";
import logoMedium from '../../assets/logo-medium.png'
import logoSmall from '../../assets/logo-small.png'
import './Navbar.css'

function Navbar() {

    return (
        <div className="outer">
            <nav className="inner">
                <div className="img-wrapper">
                    <picture>
                        <source
                            srcSet={logoSmall}
                            media="(max-width: 530px)"
                        />
                        <img
                            src={logoMedium}
                            alt="bedrijfslogo"
                        />
                    </picture>
                </div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink to="/alle-posts" className={({ isActive }) => isActive ? 'active-link' : 'default-link'}>Alle Posts</NavLink></li>
                    <li><NavLink to="/nieuwe-post" className={({ isActive }) => isActive ? 'active-link' : 'default-link'}>Nieuwe post maken</NavLink></li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;