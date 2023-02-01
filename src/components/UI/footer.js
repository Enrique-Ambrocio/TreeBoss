import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import styles from './footer.module.css'

export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className={styles.footer}>
        <div className={styles.footerOne}>
            <div className={styles.siteInfo}>
                <h2>The Tree Boss</h2>
                <h3>Professional Arborist</h3>
            </div>
            <div className={styles.contact}>
                <ul className={styles.infoContainer}>
                <h3>Get In Touch</h3>
                <li>
                     <ul className={styles.info}>
                        <li className={styles.infoImage}>
                            <BsTelephone/>
                        </li>
                        <li>
                            <h5>Call Us</h5>
                            <p>(530) 845-1134</p>
                        </li>
                     </ul>
                   </li>
                   <li>
                     <ul className={styles.info}>
                        <li className={styles.infoImage}>
                            <AiOutlineMail/>
                        </li>
                        <li>
                            <h5>Email Us</h5>
                            <p>Jesusgarcia0695@yahoo.com</p>
                        </li>
                     </ul>
                   </li>
                   <li>
                     <ul className={styles.info}>
                        <li className={styles.infoImage}>
                            <CiLocationOn/>
                        </li>
                        <li>
                            <h5>Location</h5>
                            <p>950 Iron Point Road, Suite 210 Folsom, CA 95630</p>
                        </li>
                     </ul>
                   </li>
                </ul>
                <ul className={styles.infoContainer}>
                   <li>
                      <h3>Get Connected</h3>
                      <ul className={styles.infoSocials}>
                          <li><a><AiFillInstagram/></a></li>
                          <li><a><FaFacebook/></a></li>
                      </ul>
                      </li>
                </ul>
            </div>
            </div>
            <div>
                <p>© 2023 The tree boss | All Rights Reserved</p>
            </div>
        </footer>
    )
}