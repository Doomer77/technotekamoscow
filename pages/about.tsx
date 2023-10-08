import Head from 'next/head'
import { Header } from '../components/modules/header/Header'
import { Footer } from '../components/modules/footer/Footer'
import Image from 'next/image'
import React from 'react'
import aboutInfoImg from '../assets/images/png/about-info-image.png'
import aboutMissionImg from '../assets/images/png/mission-image.png'
import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <>
      <Head>
        <title>TTM - О Нас</title>
        <meta
          name="description"
          content="TechnotekaMoscow - выездной сервис по ремонту и продаже техники брендов: Apple, Sumsung, Xiaomi, Huawei, Vivo, Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony"
        />
        <meta
          name="keywords"
          content="TechnotekaMoscow - выездной сервис, ремонт, продажа техники брендов: Apple, Sumsung, Xiaomi, Huawei, Vivo, Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.about}>
        <Header />
        <section className={styles.about__section}>
          <div className={styles.about__info}>
            <div className={styles.about__info_img__block}>
              <Image
                src={aboutInfoImg}
                className={styles.about__info__image}
                alt=""
              />
            </div>
            <div className={styles.about__info_text__block}>
              <h1 className={styles.about__info__header}>О нас</h1>
              <p className={styles.about__info__text}>
                Сервисный центр
                <span className={styles.about__info__text_red}>
                  {' '}
                  Technoteka
                </span>
                <span className={styles.about__info__text_blue}>moscow </span>
                осуществляет свою деятельность с 2012 года и специализируется на
                ремонте техники Apple, Samsung, Xiaomi, Huawei, Oppo, Vivo,
                OnePlus, Realme, Tecno, Google, Asus, Acer, HP, Dell, Lenovo,
                Gigabyte, MSi, Sony и других. Создаём сайты, чиним смартфоны,
                ноутбуки, ПК, видеокарты, планшеты, наручные часы. Основными
                нашими клиентами являются частные лица. Наши специалисты высоко
                квалифицированы и профессиональны, регулярно проходя обучение,
                тестирование и аттестацию.
              </p>
              <p className={styles.about__info__text}>
                В
                <span className={styles.about__info__text_red}>
                  {' '}
                  Technoteka
                </span>
                <span className={styles.about__info__text_blue}>moscow </span>
                сервисные инженеры задают самые высокие стандарты сервиса и
                качества предоставляемых услуг. Именно они ремонтируют Ваши
                гаджеты и разрабатывают сайты. Это специалисты, досконально
                разбирающиеся в технике Apple, Samsung, Xiaomi, Huawei и других,
                а также в программировании. Очень часто в своей работе сервисные
                инженеры используют специальные сторонние наработки для
                облегчения работы и экономии Вашего времени. Одним словом,
                сервисный инженер - это главная единица нашего штата
                сотрудников!
              </p>
            </div>
          </div>
          <div className={styles.about__mission}>
            <div className={styles.about__mission_text__block}>
              <h2 className={styles.about__mission__header}>
                Миссия компании:
              </h2>
              <p className={styles.about__mission__text}>
                Мы делаем доступными ремонт техники и создание сайтов для
                каждого! И готовы восстановить любую Вашу неисправность,
                невзирая на сложность и непогоду.
                <br />
                <span className={styles.about__mission__text_strong}>
                  Всегда рады помочь Вам!
                </span>
              </p>
            </div>
            <div className={styles.about__mission_img__block}>
              <Image
                src={aboutMissionImg}
                className={styles.about__info__image}
                alt=""
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
