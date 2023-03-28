import iconPhone from '../assets/images/png/phone-icon.png'
import iconTablet from '../assets/images/png/tablet-icon.png'
import iconBook from '../assets/images/png/book-icon.png'
import iconPc from '../assets/images/png/pc-icon.png'
import iconVideo from '../assets/images/png/video-icon.png'
import iconSiteDev from '../assets/images/png/site-icon.png'
import iconShop from '../assets/images/png/shop-icon.png'
import iconSelection from '../assets/images/png/selection-icon.png'

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
    img: iconTablet,
    path: '/tablet-service',
    title: 'Ремонт плашетов',
    longImg: false,
    alt: 'TechnotekaMoscow - сервис планшетов: Apple, Sumsung, Xiaomi, Huawei, Vivo,Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony',
  },
  {
    id: 3,
    img: iconBook,
    path: '/book-service',
    title: 'Ремонт ноутбуков',
    longImg: true,
    alt: 'TechnotekaMoscow - сервис ноутбуков: Apple, Sumsung, Xiaomi, Huawei, Vivo,Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony',
  },
  {
    id: 4,
    img: iconPc,
    path: '/pc-service',
    title: 'Ремонт и сборка ПК',
    longImg: false,
    alt: 'TechnotekaMoscow - сервис персональных компьютеров',
  },
  {
    id: 5,
    img: iconVideo,
    path: '/video-cards-service',
    title: 'Ремонт видеокарт',
    longImg: true,
    alt: 'TechnotekaMoscow - сервис видеокарт: Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte',
  },
  {
    id: 6,
    img: iconSiteDev,
    path: '/development',
    title: 'Создание сайтов',
    longImg: true,
    alt: 'TechnotekaMoscow - разработка и продвижение сайтов и приложений',
  },
  {
    id: 7,
    img: iconShop,
    path: '/shop',
    title: 'Продажа техники',
    longImg: true,
    alt: 'TechnotekaMoscow - продажа техники: Apple, Sumsung, Xiaomi, Huawei, Vivo,Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony',
  },
  {
    id: 8,
    img: iconSelection,
    path: '/selection',
    title: 'Подбор техники',
    longImg: true,
    alt: 'TechnotekaMoscow - продажа техники: Apple, Sumsung, Xiaomi, Huawei, Vivo,Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony',
  },
]
