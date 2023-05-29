import Head from 'next/head'
import React from 'react'
import { withLayout } from '../components/modules/layout/Layout'
import Image from 'next/image'
import devImage from '../assets/images/png/dev-image.png'
import styles from '../styles/Dev.module.css'

function WebSiteDev() {
  return (
    <>
      <Head>
        <title>TTM - Разработка сайтов</title>
        <meta
          name="description"
          content="TechnotekaMoscow - IT сервис по разработке, сопровождению и продвижению сайтов и приложений"
        />
        <meta
          name="keywords"
          content="разработка сайтов, продвижение сайтов, сопровождение сайтов, разработка приложений, продвижение приложений, сопровождение приложений"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.dev}>
        <div className={styles.main}>
          <div className={styles.main_image_box}>
            <Image src={devImage} alt='Разработка сайтов, продвижение сайтов,
                                        сопровождение сайтов, разработка приложений,
                                        продвижение приложений, сопровождение приложений'
            />
          </div>
          <div className={styles.main_text_box}>
            <h1 className={styles.main_text_heading}>Разработка сайтов и приложений</h1>
            <p className={styles.main_text_text}>Наша команда разработает сайт или приложение для Ваших идей.</p>
            <p className={styles.main_text_text}>Мы поможем Вам разработь дизайн сайта или приложения под Ваши потребности.</p>
            <p className={styles.main_text_text}>При создании сайтов и приложений мы используем современные технологии и инструменты разработки.</p>
            <p className={styles.main_text_strong}>Мы оставляем за собой право отказать в разработке сайтов, нарушающих законодательство Российской Федерации и распространяющих моральное или этичное разложение общества.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(WebSiteDev, 'layout')
