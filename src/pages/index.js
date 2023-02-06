import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {BsFillTelephoneFill} from 'react-icons/bs'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <section>
      <div className={styles.heroContainer}>
        <Image
            src='/treeboss_hero.png'
            alt="BackGround"
            fill
          />
          <div className={styles.hero}>
            <ul className={styles.heroText}>
              <li><p>Working to Improve Tree Health, Beauty & Wealth</p></li>
              <li><h1>Arborist Services</h1></li>
            </ul>
            <ul className={styles.heroButtons}>
              <li><button className={styles.button1}>GET YOUR ESTIMATE</button></li>
              <li><button className={styles.button2}>LEARN ABOUT US</button></li>
            </ul>
          </div>
        </div>
        </section>
        <section className={styles.callToAction} name="services">
        <Image
            src='/aboutBackGround.png'
            alt="BackGround"
            fill
          />
        <h2>Let's Get To Work</h2>
          <ul>
            <li><BsFillTelephoneFill/></li>
            <li><a href={`tel:${5308451134}`}>Call (530) 845-1134</a></li>
          </ul>
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
        <section style={{width: "100%", height:'auto', position: 'relative', backgroundColor: '#408C67', opacity: '1', minWidth:'10rem'}} name="about">
        <Image
            src='/aboutBackGround.png'
            alt="BackGround"
            fill
          />
        <div className={styles.about1}>
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
                  <h4>WHO WE ARE</h4>
              </li>
              <li>
                 <h2>The Tree Boss</h2>
              </li>
              <li>
                 <p>The Tree Boss is a tree-service company with a straightforward and unique design/build philosophy. We believe in having one landscape designer handle the job from its conception on paper, to the realization on your property. 
The Tree Boss is made up of a group of highly skilled landscaping professionals who pay a lot of attention to small details.</p>
              </li>
          </ul>
        </div>
        </div>
        </section>
        <section className={styles.about} id="safety">
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
