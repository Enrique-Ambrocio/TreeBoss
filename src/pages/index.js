import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section style={{width: "100vw", height:'43vw', position: 'relative'}}>
          <Image
            src="/treeboss_hero.png"
            alt="Tree Boss Logo"
            fill
          />
        </section>
        <section className={styles.services}>
          <h2>
            Our Services
          </h2>
          <ul className={styles.project_hero_content_container}>
                <li>
                    <ul className={styles.project_hero_content_project}>
                        <li>
                        <Image src="/oakTree.png" alt="Oak Tree" width={75} height={75}/>
                        </li>
                        <li>
                          <h3>Tree Removal Services</h3>
                        </li>
                        <li>
                            <p>We focus on great services and best in safety handling</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className={styles.project_hero_content_project}>
                        <li>
                        <Image src="/treePlanting.png" alt="Tree Planting" width={75} height={75}/>
                        </li>
                        <li>
                          <h3>Land Maintenance</h3>
                        </li>
                        <li>
                            <p>We focus on great services and best in safety handling</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className={styles.project_hero_content_project}>
                        <li>
                        <Image src="/treeCare.png" alt="Tree Care" width={75} height={75}/>
                        </li>
                        <li>
                          <h3>Tree Care</h3>
                        </li>
                        <li>
                            <p>We focus on great services and best in safety handling</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className={styles.project_hero_content_project}>
                        <li>
                        <Image src="/fireWoodDelivery.png" alt="Fire Wood Delivery" width={75} height={75}/>
                        </li>
                        <li>
                          <h3>Firewood Delivery</h3>
                        </li>
                        <li>
                            <p>We focus on great services and best in safety handling</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <section style={{width: "100vw", height:'43vw', position: 'relative', backgroundColor: '#408C67', opacity: '1'}}>
          <Image
            src="/aboutBackGround.png"
            alt="BackGround"
            fill
          />
          {/* <section className={styles.about}>
        <div className={styles.image1}>
        <Image
          src='/whoWeAre.png'
          alt='Background'
          fill
        />
        </div>
        <div className={styles.aboutText}>
           <ul>
              <li>
                  <h4>WHAT WE DO</h4>
              </li>
              <li>
                 <h2>Managing Your Urban Forest</h2>
              </li>
              <li>
                 <p>Your trees need maintenance. It’s as simple as that. Whether it’s stump grinding, tree removal, tree trimming, or plant heath care your home deserves the best to maintain your beautiful landscape all while keeping mother nature healthy.</p>
              </li>
          </ul>
        </div>
        </section> */}
        </section>
        <section className={styles.about}>
        <div className={styles.aboutText}>
           <ul>
              <li>
                  <h4>WHAT WE DO</h4>
              </li>
              <li>
                 <h2>Managing Your Urban Forest</h2>
              </li>
              <li>
                 <p>Your trees need maintenance. It’s as simple as that. Whether it’s stump grinding, tree removal, tree trimming, or plant heath care your home deserves the best to maintain your beautiful landscape all while keeping mother nature healthy.</p>
              </li>
          </ul>
        </div>
        <div className={styles.image}>
        <Image
          src='/whatWeDoBackground.png'
          alt='Background'
          fill
        />
        </div>
        </section>
      </main>
    </>
  )
}
