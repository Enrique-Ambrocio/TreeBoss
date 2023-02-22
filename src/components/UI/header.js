import styles from './header.module.css'
import Image from "next/image";
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';


export default function Header() {

    const [displayMenuItems, setDisplayMenuItems] = useState(false)
  
    const onClickHandler = () => setDisplayMenuItems(value => !value)

    let content;

    if (!displayMenuItems) {
        content = <GiHamburgerMenu onClick={onClickHandler} />
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                src='/logothetreeboss.png'
                width={125}
                height={100}
                />
            </div>
            <div className={styles.toggleButton}>
            <GiHamburgerMenu onClick={onClickHandler}/>
            </div>
            <nav className={styles.navDesktop}>
            <ul>
                <li>
                    <Link href="#about" legacyBehavior><a>ABOUT</a></Link>
                </li>
                <li>
                    <Link href="#services" legacyBehavior><a>OUR SERVICES</a></Link>
                </li>
                <li>
                    <Link href="#safety" legacyBehavior><a>SAFETY</a></Link>
                </li>
                <li>
                    <Link href="#" legacyBehavior><a>GALLERY</a></Link>
                </li>
                <button>
                    Contact Us
                </button>
            </ul>
            </nav>
            {displayMenuItems && <nav className={styles.nav}>
            <ul>
                <li onClick={onClickHandler}>
                    <Link href="#about" legacyBehavior><a>ABOUT</a></Link>
                </li>
                <li onClick={onClickHandler}>
                    <Link href="#services" legacyBehavior><a>OUR SERVICES</a></Link>
                </li>
                <li onClick={onClickHandler}>
                    <Link href="#safety" legacyBehavior><a>SAFETY</a></Link>
                </li>
                <li onClick={onClickHandler}>
                    <Link href="#" legacyBehavior><a>GALLERY</a></Link>
                </li>
                <button>
                    Contact Us
                </button>
            </ul>
            </nav>}
        </header>
    )
}