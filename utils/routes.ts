interface NavProps {
  id: number
  title?: string
  path: string
}

export const navHeader: NavProps[] = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'О нас', path: '/about' },
  { id: 3, title: 'Блог', path: '/blog' },
  { id: 4, title: 'Создание сайтов', path: '/website-dev' },
]

export const navFooter: NavProps[] = [
  { id: 1, title: 'Скидки и акции', path: '/sales' },
  { id: 2, title: 'Преимущества', path: '/advantages' },
  { id: 3, title: 'Контакты', path: '/contact' },
]
