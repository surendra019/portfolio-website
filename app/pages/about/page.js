import React from "react";
import styles from './page.module.css'


export default function About() {
  return (
    <div className={styles.bg}>
      <main className={styles.main_container}>
        <div className={styles.about_container}>
          <div className={styles.head}>
            <div>ABOUT</div>
          </div>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
            </p>

          </div>
        </div>
        <div className={styles.image_container}><img src="/mine.png" /></div></main>

    </div>
  )
}
