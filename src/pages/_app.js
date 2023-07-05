import { DefaultLayout } from '@/app/layouts'

const App = ({ Component, ...pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default App
