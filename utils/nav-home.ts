import iconPhone from '../assets/images/png/phone-icon.png'
import iconTablet from '../assets/images/png/tablet-icon.png'
import iconBook from '../assets/images/png/book-icon.png'
import iconPc from '../assets/images/png/pc-icon.png'
import iconVideo from '../assets/images/png/video-icon.png'
import iconSiteDev from '../assets/images/png/site-icon.png'
import iconWatch from '../assets/images/png/smart-watch.png'
import iconSPS from '../assets/images/png/sps-icon.png'

export interface NavHomeInterface {
  id: number
  img: StaticImageData
  path: string
  title: string
  longImg: boolean
  alt: string
}

export const navHome: NavHomeInterface[] = [
  {
    id: 1,
    img: iconPhone,
    path: '/phone-service',
    title: 'Ремонт телефонов',
    longImg: false,
    alt: 'TechnotekaMoscow - сервис телефонов: Apple, Sumsung, Xiaomi, Huawei, Vivo,Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony',
  },
  {
    id: 2,
    img: iconBook,
    path: '/book-service',
    title: 'Ремонт ноутбуков',
    longImg: true,
    alt: 'TechnotekaMoscow - сервис ноутбуков: Apple, Sumsung, Xiaomi, Huawei, Vivo,Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony',
  },
  {
    id: 3,
    img: iconPc,
    path: '/pc-service',
    title: 'Ремонт и сборка ПК',
    longImg: false,
    alt: 'TechnotekaMoscow - сервис персональных компьютеров',
  },
  {
    id: 4,
    img: iconVideo,
    path: '/video-cards-service',
    title: 'Ремонт видеокарт',
    longImg: true,
    alt: 'TechnotekaMoscow - сервис видеокарт: Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte',
  },
  {
    id: 5,
    img: iconSiteDev,
    path: '/development',
    title: 'Создание сайтов',
    longImg: true,
    alt: 'TechnotekaMoscow - разработка и продвижение сайтов и приложений',
  },
  {
    id: 6,
    img: iconWatch,
    path: '/watch-service',
    title: 'Ремонт часов',
    longImg: true,
    alt: 'TechnotekaMoscow - продажа техники: Apple, Sumsung, Xiaomi, Huawei, Vivo,Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony',
  },
  {
    id: 7,
    img: iconSPS,
    path: '/console-service',
    title: 'Ремонт приставок PS, X BOX',
    longImg: true,
    alt: 'TechnotekaMoscow - ремонт приставок: Sony PlayStation, XBox',
  },
  {
    id: 8,
    img: iconTablet,
    path: '/tablet-service',
    title: 'Ремонт плашетов',
    longImg: false,
    alt: 'TechnotekaMoscow - сервис планшетов: Apple, Sumsung, Xiaomi, Huawei, Vivo,Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony',
  },
]
