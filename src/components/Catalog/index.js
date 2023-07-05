import { useEffect, useState } from 'react'
import axios from 'axios'
import '@/styles/catalog.scss'
import { Product } from '../Product'
import { TailSpin } from  'react-loader-spinner'

export const Catalog = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalPages, setTotalPages] = useState(0)

  const scrollHandler = (event) => {
    console.log(event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight))
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 500 && (totalPages > page || page === 1)) {
      setFetching(true)
    }
  }

  useEffect(() => {
    if (fetching) {
      axios.post('https://api.lichi.com/category/get_category_product_list', {
        category: `clothes`,
        lang: 1,
        shop: 1,
        limit: 12,
        page: page
      })
        .then((res) => {
          setTotalPages(res.data.api_data.iPages)
          setProducts([...products, ...res.data.api_data.aProduct])
          setPage(prevState => prevState + 1)
        })
        .finally(() => {
          setFetching(false)
        })
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div className='catalog'>
      {products.map((item) => {
        return (
          <Product key={item.id} photos={item.photos} name={item.name} price={item.price} />
        )
      })}
      <TailSpin
        height="80"
        width="80"
        color="black"
        ariaLabel="tail-spin-loading"
        wrapperClass="spiner"
        radius="1"
        visible={true}
      />
    </div>
  )
}