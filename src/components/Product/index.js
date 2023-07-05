import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import '@/styles/product.scss'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer';


export const Product = ({ photos, name, price }) => {
  const [favorite, setFavorite] = useState(false)
  const [addButtonActive, setAddButtonActive] = useState(false)
  const [photoShow, setPhotoShow] = useState(0)

  const {ref, inView} = useInView({
    threshold: 0
  })

  return (
    <div ref={ref} className={(inView ? 'show-product' : '') + ' product'}>
      <div className='product-container'>
        <div onMouseEnter={() => setAddButtonActive(true)} onMouseLeave={() => setAddButtonActive(false)} className="box-image">
          <button onClick={() => {
            setFavorite(!favorite)
          }} className="favorite-button">
            {favorite ? <IconHeartFilled /> : <IconHeart />}
          </button>
          
          {inView ?
            <img className='image' src={`${photos[photoShow].big}&resize=size-middle`} />
            :
            <div className='skeleton-product'></div>
          }

          <div className='carousel-hovers'>
            <div onMouseEnter={() => setPhotoShow(0)} onMouseLeave={() => setPhotoShow(0)} className="carousel-hover"></div>
            <div onMouseEnter={() => setPhotoShow(1)} onMouseLeave={() => setPhotoShow(0)} className="carousel-hover"></div>
            <div onMouseEnter={() => setPhotoShow(2)} onMouseLeave={() => setPhotoShow(0)} className="carousel-hover"></div>
          </div>
          
          <button className={(addButtonActive ? "active" : "")+ " add-button"}>Добавить</button>
        </div>
        <a className='product-link'>
          <span className='product-name'>
            {name}
          </span>
          <span className='product-price'>
            {(price ? (Math.round(price/1000) +  ' ' + price%1000) : price) + ' руб.'}
          </span>
        </a>
      </div>
    </div>
  )
}