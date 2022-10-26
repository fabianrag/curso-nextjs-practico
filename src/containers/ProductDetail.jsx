import React from 'react'
import Image from 'next/image'
import ProductInfo from '@components/ProductInfo'
import style from '@styles/ProductDetail.module.scss'
import close from '@icons/icon_close.png'

const ProductDetail = () => {
  return (
    <aside className={style['ProductDetail']}>
      <div className={style['ProductDetail-close']}>
        <Image src={close} alt='close' />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail
