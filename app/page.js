
import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'
// import Navbar from './components/navbar/page'


export default function Home() {
  return (
    <>
      <div className={`${styles.bg}`}>
        
        <div className={styles.name_container}>
          <div className={`${styles.first_name} ${styles.name}`}>SURENDRA</div>
          <div className={`${styles.last_name} ${styles.name}`}>SAINI</div>
          <div className={`${styles.buttons}`}>
            <button className={`btn btn-outline-light`}>Resume</button>
            <button className={`btn btn-outline-light`}>Portfolio</button>
          </div>
        </div>
        <footer className={styles.foot}>
          {/* <div className={styles.icons}> */}
            <div className={styles.footer_icons}>
              <Link href="#"><img src="/instagram.svg"></img></Link>
            </div>

            <div className={styles.footer_icons}>
              <Link href="#"><img src="/youtube.svg"></img></Link>
            </div>
            <div className={styles.footer_icons}>
              <Link href="#"><img src="/linkedin.svg"></img></Link>
            </div>
            <div className={styles.footer_icons}>
              <Link href="#"><img src="/github.svg"></img></Link>
            </div>
          {/* </div> */}

        </footer>
      </div>
    </>

  )
}
