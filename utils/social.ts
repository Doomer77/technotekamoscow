import { FunctionComponent, SVGAttributes } from 'react'
import OkIcon from '../assets/images/svg/odnoklassniki.svg'
import VkIcon from '../assets/images/svg/vk.svg'
import TikTokIcon from '../assets/images/svg/tiktok.svg'
import TelegramIcon from '../assets/images/svg/telegram.svg'

export interface SocialInterface {
  id: number
  Image: FunctionComponent<SVGAttributes<SVGAElement>>
  path: string
}

export const navSocial: SocialInterface[] = [
  {
    id: 1,
    Image: OkIcon,
    path: 'https://ok.ru/technotekamoscow',
  },
  {
    id: 2,
    Image: VkIcon,
    path: 'https://vk.com/technotekamoscowru',
  },
  {
    id: 3,
    Image: TikTokIcon,
    path: 'https://www.tiktok.com/@technotekamoscow?',
  },
  {
    id: 4,
    Image: TelegramIcon,
    path: 'https://t.me/technotekamoscow',
  },
]
