import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@styles/SendEmail.module.scss'
import logo from '@logos/logo_yard_sale.svg'
import email from '@icons/email.svg'

const SendEmail = () => {
  return (
    <div className={style['SendEmail']}>
      <div className={style['form-container']}>
        <Image src={logo} alt='logo' className={style['logo']} />
        <h1 className={style['title']}>Email has been sent!</h1>
        <p className={style['subtitle']}>
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className={style['email-image']}>
          <Image src={email} alt='email' />
        </div>
        <button className={(style['primary-button'], style['login-button'])}>
          Login
        </button>
        <p className={style['resend']}>
          <span>Didn&apos;t receive the email?</span>
          <Link>
            <a>Resend</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SendEmail
