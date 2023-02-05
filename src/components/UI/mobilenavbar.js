import Link from "next/link";
import { Fragment, useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import { MdCancel } from 'react-icons/md'
import styles from './header.module.css'

export default function MobileNavBar() {

    const [displayMenuItems, setDisplayMenuItems] = useState(false)

    function cancelHandler() {
        setDisplayMenuItems(false)
    }

    function onClickHandler() {
        setDisplayMenuItems(true)
    }

    let content;

    if (!displayMenuItems) {
        content = <GiHamburgerMenu onClick={onClickHandler} />
    }


    if (displayMenuItems) {
        content = <Fragment>
            <MdCancel onClick={cancelHandler} />
            <ul>
                <li>
                    <Link href="#hero" legacyBehavior><a>ABOUT</a></Link>
                </li>
                <li>
                    <Link href="#services" legacyBehavior><a>OUR SERVICES</a></Link>
                </li>
                <li>
                    <Link href="about" legacyBehavior><a>SAFETY</a></Link>
                </li>
                <li>
                    <Link href="whoWeAre" legacyBehavior><a>GALLERY</a></Link>
                </li>
            </ul>
        </Fragment>
    }

    return (
        <div className={styles.mobile_nav}>
            {content}
        </div>
    )
}