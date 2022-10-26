import React from 'react'
import Image from 'next/image'
import style from '@styles/PasswordRecovery.module.scss'
import logo from '@logos/logo_yard_sale.svg'

const PasswordRecovery = () => {
  return (
    <div className={style['PasswordRecovery']}>
      <div className={style['PasswordRecovery-container']}>
        <Image src={logo} alt='logo' className={style['logo']} />
        <h1 className={style['title']}>Password recovery</h1>
        <p className={style['subtitle']}>
          Inform the email address used to create your account
        </p>
        <form action='/' className={style['form']}>
          <label htmlFor='email' className={style['label']}>
            Email address
          </label>
          <input
            type='text'
            id='email'
            className={(style['input'], style['input-email'])}
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

export default PasswordRecovery
