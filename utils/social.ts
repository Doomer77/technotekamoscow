import { FunctionComponent, SVGAttributes } from 'react'
import OkIcon from '../assets/images/svg/odnoklassniki.svg'
import VkIcon from '../assets/images/svg/vk.svg'
import TikTokIcon from '../assets/images/svg/tiktok.svg'
import TelegramIcon from '../assets/images/svg/telegram.svg'

export interface SocialInterface {
  id: number
  ImageIcon: FunctionComponent<SVGAttributes<SVGAElement>>
  path: string
  alt: string
}

export const navSocial: SocialInterface[] = [
  {
    id: 1,
    ImageIcon: OkIcon,
    path: 'https://ok.ru/technotekamoscow',
    alt: '',
  },
  {
    id: 2,
    ImageIcon: VkIcon,
    path: 'https://vk.com/technotekamoscowru',
    alt: '',
  },
  {
    id: 3,
    ImageIcon: TikTokIcon,
    path: 'https://www.tiktok.com/@technotekamoscow?',
    alt: '',
  },
  {
    id: 4,
    ImageIcon: TelegramIcon,
    path: 'https://t.me/technotekamoscow',
    alt: '',
  },
]
