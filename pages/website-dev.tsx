import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { withLayout } from '../components/modules/layout/Layout'
import { Card } from '../components/ui/card/Card'
import { cards } from '../utils/cards'
import devImage from '../assets/images/png/dev-image.png'
import styles from '../styles/Dev.module.scss'

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
          <div className={styles.main__image_box}>
            <Image
              className={styles.main__image}
              src={devImage}
              alt="Разработка сайтов, продвижение сайтов,
                                        сопровождение сайтов, разработка приложений,
                                        продвижение приложений, сопровождение приложений"
            />
          </div>
          <div className={styles.main__text_box}>
            <h1 className={styles.main__text_heading}>
              Разработка сайтов и приложений
            </h1>
            <p className={styles.main__text_text}>
              Наша команда разработает сайт или приложение для Ваших идей.
            </p>
            <p className={styles.main__text_text}>
              Мы поможем Вам разработь дизайн сайта или приложения под Ваши
              потребности.
            </p>
            <p className={styles.main__text_text}>
              При создании сайтов и приложений мы используем современные
              технологии и инструменты разработки.
            </p>
            <p className={styles.main__text_text}>
              Мы предлагаем SEO продвижение, постоянную поддержку сайта
            </p>
            <p className={styles.main__text_strong}>
              Мы оставляем за собой право отказать в разработке сайтов,
              нарушающих законодательство Российской Федерации и
              распространяющих моральное или этичное разложение общества.
            </p>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.features__box_heading}>
            <h2 className={styles.features__heading}>
              Разрабатываем и внедряем любые решения
            </h2>
          </div>
          <div className={styles.features__content}>
            <div className={styles.features__box}>
              {cards.map((c, index) => {
                if (index <= 2) {
                  return (
                    <Card
                      key={c.id}
                      variant={c.variant}
                      heading={c.heading}
                      textP={c.textP}
                      price={c.price}
                      textBtn={c.textBtn}
                    />
                  )
                }
              })}
            </div>
            <div className={styles.features__box}>
              {cards.map((c, index) => {
                if (index > 2) {
                  return (
                    <Card
                      key={c.id}
                      variant={c.variant}
                      heading={c.heading}
                      textP={c.textP}
                      price={c.price}
                      textBtn={c.textBtn}
                    />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(WebSiteDev, 'layout')
