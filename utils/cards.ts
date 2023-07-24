interface CardProps {
  id: number
  variant: string
  heading: string
  textP: string
  price: string
  textBtn: string
}

export const cards: CardProps[] = [
  {
    id: 1,
    variant: 'violet',
    heading: `Одностраничный лендинг`,
    textP: 'Рекламные, продающие, красивые страницы с индивидуальным дизайном',
    price: 'Цена от 30000Р',
    textBtn: 'Заказать',
  },
  {
    id: 2,
    variant: 'lgreen',
    heading: 'Рекламный сайт',
    textP: 'Нацелен на продвижение услуг или рекламных продуктов',
    price: 'Цена от 45000Р',
    textBtn: 'Заказать',
  },
  {
    id: 3,
    variant: 'orange',
    heading: 'Блог',
    textP: 'Сайт с индивидуальной характерной текстовой структурой',
    price: 'Цена от 40000Р',
    textBtn: 'Заказать',
  },
  {
    id: 4,
    variant: 'blue',
    heading: 'Информационный сайт',
    textP: 'Портал, на котором размещаются текстовые и медиа материалы тематик',
    price: 'Цена от 45000Р',
    textBtn: 'Заказать',
  },
  {
    id: 5,
    variant: 'lorange',
    heading: 'Корпоративный сайт',
    textP: 'Стильный и современный корпоративный сайт для бизнеса',
    price: 'Цена от 45000Р',
    textBtn: 'Заказать',
  },
  {
    id: 6,
    variant: 'green',
    heading: 'Продвижение SEO',
    textP: 'SEO продвижение – процесс, требующий индивидуального подхода',
    price: 'Цена от 40000Р',
    textBtn: 'Заказать',
  },
]
