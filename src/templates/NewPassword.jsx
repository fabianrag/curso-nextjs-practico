import React from 'react'
import Image from 'next/image'
import style from '@styles/NewPassword.module.scss'
import logo from '@logos/logo_yard_sale.svg'

const NewPassword = () => {
  return (
    <div className={style['NewPassword']}>
      <div className={style['NewPassword-container']}>
        <Image src={logo} alt='logo' className={style['logo']} />
        <h1 className={style['title']}>Create a new password</h1>
        <p className={style['subtitle']}>Enter a new passwrd for yue account</p>
        <form action='/' className={style['form']}>
          <label for='password' className={style['label']}>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='*********'
            className={(style['input'], style['input-password'])}
          />
          <label for='new-password' className={style['label']}>
            Password
          </label>
          <input
            type='password'
            id='new-password'
            placeholder='*********'
            className={(style['input'], style['input-password'])}
          />
          <input
            type='submit'
            value='Confirm'
            className={(style['primary-button'], style['login-button'])}
          />
        </form>
      </div>
    </div>
  )
}

export default NewPassword
