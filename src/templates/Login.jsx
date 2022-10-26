import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@styles/Login.module.scss'
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      usename: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data)
  }

  return (
    <div className={style['Login']}>
      <div className={style['Login-container']}>
        <Image src={logo} alt='logo' className='logo' />
        <form action='/' className={style['form']} ref={form}>
          <label htmlFor='email' className={style['label']}>
            Email address
          </label>
          <input
            type='text'
            name='email'
            placeholder='platzi@example.cm'
            className={(style['input'], style['input-email'])}
          />
          <label htmlFor='password' className={style['label']}>
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder='*********'
            className={(style['input'], style['input-password'])}
          />
          <button
            onClick={handleSubmit}
            className={(style['primary-button'], style['login-button'])}
          >
            Log in
          </button>
          <Link>
            <a>Forgot my password</a>
          </Link>
        </form>
        <button className={(style['secondary-button'], style['signup-button'])}>
          Sign up
        </button>
      </div>
    </div>
  )
}

export default Login
