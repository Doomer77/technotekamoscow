import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { navHome } from '../utils/nav-home'
import { withLayout } from '../components/modules/layout/Layout'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>TTM - ремонт и обслуживание техники</title>
        <meta
          name="description"
          content="TechnotekaMoscow - выездной сервис по ремонту и продаже техники брендов: Apple, Sumsung, Xiaomi, Huawei, Vivo,
                    Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.home}>
        <div className={styles.home_preview_block}>
          <h1 className={styles.home_preview_text}>
            <span className={styles.home_preview_text_blue}>Technoteka</span>
            <span className={styles.home_preview_text_red}>Moscow</span> -
            сервис по ремонту техники Apple, Sumsung, Xiaomi, Huawei, Vivo,
            Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte,
            Sony...
          </h1>
        </div>
        <div className={styles.home_nav_block}>
          <nav className={styles.home_nav_features_block}>
            <ul className={styles.home_nav_features_list}>
              {navHome
                .slice(0, 4)
                .map(({ id, path, img, title, longImg, alt }) => (
                  <li key={id} className={styles.home_nav_feature}>
                    <Link href={path} className={styles.home_nav_feature_link}>
                      <Image
                        className={
                          longImg
                            ? styles.home_nav_feature_img_long
                            : styles.home_nav_feature_img
                        }
                        src={img}
                        alt=""
                        priority
                      />
                      <p className={styles.home_nav_feature_text}>{title}</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <nav className={styles.home_nav_features_block}>
            <ul className={styles.home_nav_features_list}>
              {navHome
                .slice(4)
                .map(({ id, path, img, title, longImg, alt }) => (
                  <li key={id} className={styles.home_nav_feature}>
                    <Link href={path} className={styles.home_nav_feature_link}>
                      <Image
                        className={
                          longImg
                            ? styles.home_nav_feature_img_long
                            : styles.home_nav_feature_img
                        }
                        src={img}
                        alt=""
                        priority
                      />
                      <p className={styles.home_nav_feature_text}>{title}</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

export default withLayout(Home)
