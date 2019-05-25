import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/thierno'>Thierno</Link></li>
                <li><Link to='/ibrahim'>Ibrahima</Link></li>
                <li><Link to='/madian'>Madian</Link></li>
            </ul>
        </nav>
    );
}

export default Header;