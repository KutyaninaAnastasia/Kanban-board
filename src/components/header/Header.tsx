import React, { useState, useRef, useEffect  } from "react";
import userImage from "../../img/user-avatar.svg";
import { ReactComponent as Arrow } from '../../img/arrow-down.svg';
import styles from './Header.module.scss'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const userLinks = ['Profile', 'Log Out'];
    const listItems = userLinks.map(link => (
        <li key={link} className={styles.header__menu__item}>
            <a className={styles.header__menu__link} href="/">{link}</a>
        </li>
    ));

    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.header__title}>Awesome Kanban Board</h1>
            </div>
            <div className={styles.header__menu} ref={menuRef}>
                <div className={styles.header__menu__toggle} onClick={toggleMenu}>
                    <img className={styles.header__menu__image} src={userImage} alt="user avatar" />
                    <Arrow className={isMenuOpen ? styles.header__menu__arrow_down : styles.header__menu__arrow_up} />
                </div>
                <ul className={`${styles.header__menu__list} ${isMenuOpen && styles.header__menu__list__open}`}>
                    {listItems}
                </ul>
            </div>
        </header>
    );
}

export default Header;
