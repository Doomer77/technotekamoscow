import { FunctionComponent, SVGAttributes } from 'react'
import okIcon from '../assets/images/png/odnoklassniki.png'
import vkIcon from '../assets/images/png/vk.png'
import tikTokIcon from '../assets/images/png/tiktok.png'
import telIcon from '../assets/images/png/telegram.png'

export interface SocialInterface {
  id: number
  icon: StaticImageData
  path: string
  alt: string
}

export const navSocial: SocialInterface[] = [
  {
    id: 1,
    icon: okIcon,
    path: 'https://ok.ru/technotekamoscow',
    alt: '',
  },
  {
    id: 2,
    icon: vkIcon,
    path: 'https://vk.com/technotekamoscowru',
    alt: '',
  },
  {
    id: 4,
    icon: telIcon,
    path: 'https://t.me/technotekamoscow',
    alt: '',
  },
]
