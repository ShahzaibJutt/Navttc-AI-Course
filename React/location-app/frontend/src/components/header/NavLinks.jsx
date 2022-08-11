import { NavLink } from "react-router-dom"

import './NavLinks.css';

const NavLinks = () => {
    return <ul className="nav-links">
        <li>
            <NavLink to={'/'} exact>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to={'/u1/posts'}>
                My Posts
            </NavLink>
        </li>
        <li>
            <NavLink to={'/posts/new'}>
                Add New
            </NavLink>
        </li>
        <li>
            <NavLink to={'/auth'}>
                Authenticate
            </NavLink>
        </li>
    </ul>
}

export default NavLinks;