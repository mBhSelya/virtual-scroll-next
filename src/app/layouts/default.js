import { Header } from '@/components'
import { M_PLUS_1 } from 'next/font/google'
import '@/styles/global.scss'

const font = M_PLUS_1({ subsets: ['latin'] })

export function DefaultLayout({ children }) {

  return (
    <div className={`${font.className} main-height`}>
      <Header />
      {children}
    </div>
  )
}