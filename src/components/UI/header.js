import DesktopNavBar from "./desktopnavbar";
import MobileNavBar from "./mobilenavbar";
import styles from './header.module.css'
import Image from "next/image";



export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                src='/treeBossLogo.png'
                width={100}
                height={50}
                />
                <div>
                    <h2>The Tree Boss</h2>
                    <p>Professional Arborist</p>
                </div>
            </div>
            <nav>
                <DesktopNavBar />
                <MobileNavBar />
            </nav>
        </header>
    )
}