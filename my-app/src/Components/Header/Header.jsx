import React from 'react';
import s from'./Header.module.css';

const Header = () => {
    return (
        <div>
        <header>
            <div className={s.logo}>
                <img src="https://sm.ign.com/ign_sr/screenshot/default/edge-browser-logo-microsoft-100816808-large_bvtb.jpg" alt="logo" />
            </div>
        </header>
    </div>
    );
}

export default Header;

