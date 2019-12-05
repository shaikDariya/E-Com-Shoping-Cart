import React from 'react';
import styles from './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCheck } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
    <div className={styles.container}>
        <div className={styles.hamburgerMenu}>
            <FontAwesomeIcon icon={faBars} className={`${styles.fontIcon} ${styles.cursorPointer}`}/>
        </div>
        <div className={styles.searchMenu}>
            <input type="text" placeholder="I am looking for" className={styles.searchBar}/>
        </div>
        <div className={styles.headerRight}>
            <FontAwesomeIcon icon={faBell} className={`${styles.fontIcon} ${styles.cursorPointer}`}/>
            <FontAwesomeIcon icon={faCheck} className={`${styles.fontIcon} ${styles.cursorPointer}`}/>
        </div>
    </div>
);

export default Header;