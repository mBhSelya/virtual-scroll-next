import Link from 'next/link'
import { Tangerine } from 'next/font/google'
import '@/styles/header.scss'

const font = Tangerine({ subsets: ['latin'], weight: '400' })

export const Header = () => {
  return (
    <header className='header'>
      <h2 className={`${font.className} logo`}>Lichi</h2>
      <Link className='link' href='/'>Главная</Link>
      <Link className='link' href='/catalog'>Каталог</Link>
    </header >
  )
}