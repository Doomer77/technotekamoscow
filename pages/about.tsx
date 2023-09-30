import Head from 'next/head'
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
      <section className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_info}>
            <div className={styles.about_info_img_block}>
              <Image
                src={aboutInfoImg}
                className={styles.about_info_image}
                alt=""
              />
            </div>
            <div className={styles.about_info_content}>
              <h1 className={styles.about_info_header}>О нас</h1>
              <p className={styles.about_info_text}>
                Сервисный центр
                <span className={styles.about_info_text_red}> Technoteka</span>
                <span className={styles.about_info_text_blue}>moscow </span>
                осуществляет свою деятельность с 2012 года и специализируется на
                ремонте техники Apple, Samsung, Xiaomi, Huawei, Oppo, Vivo,
                OnePlus, Realme, Tecno, Google, Asus, Acer, HP, Dell, Lenovo,
                Gigabyte, MSi, Sony и других. Создаём сайты, чиним смартфоны,
                ноутбуки, ПК, видеокарты, планшеты, наручные часы. Основными
                нашими клиентами являются частные лица. Наши специалисты высоко
                квалифицированы и профессиональны, регулярно проходя обучение,
                тестирование и аттестацию.
              </p>
              <p className={styles.about_info_text}>
                В<span className={styles.about_info_text_red}> Technoteka</span>
                <span className={styles.about_info_text_blue}>moscow </span>
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
          <div className={styles.about_mission}>
            <div className={styles.about_mission_content}>
              <h2 className={styles.about_mission_header}>Миссия компании:</h2>
              <p className={styles.about_mission_text}>
                Мы делаем доступными ремонт техники и создание сайтов для
                каждого! И готовы восстановить любую Вашу неисправность,
                невзирая на сложность и непогоду.
                <br />
                <span className={styles.about_mission_strong}>
                  Всегда рады помочь Вам!
                </span>
              </p>
            </div>
            <div className={styles.about_mission_img_block}>
              <Image
                src={aboutMissionImg}
                className={styles.about_info_image}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
