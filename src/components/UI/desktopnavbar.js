import Link from "next/link";
import styles from './header.module.css'

export default function DesktopNavBar() {
    return (
        <div className={styles.desktop_nav}>
            <ul>
                <li>
                    <Link href="/blog" legacyBehavior><a>ABOUT</a></Link>
                </li>
                <li>
                    <Link href="/blog" legacyBehavior><a>OUR SERVICES</a></Link>
                </li>
                <li>
                    <Link href="/blog" legacyBehavior><a>SAFETY</a></Link>
                </li>
                <li>
                    <Link href="/blog" legacyBehavior><a>GALLERY</a></Link>
                </li>
                <button>
                    Contact Us
                </button>
            </ul>
        </div>
    )
}