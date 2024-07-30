import { memo } from 'react'
import clsx from 'clsx'
import * as cls from './Navbar.module.scss'
import Applogo from 'shared/assets/icons/logo.svg'
import WhatsAppIcon from 'shared/assets/icons/whatsapp.svg'
import PhoneIcon from 'shared/assets/icons/phone.svg'
import { headerArr } from 'shared/const/header'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props

  return (
    <div className={clsx(cls.Navbar, className)}>
      <img className={cls.NavAvatar} src={Applogo} alt="nura-elite" />

      <div className={cls.NavSocial}>
        <div className={cls.contact}>
          <a className={cls.contact__wrapper} href="/src/pages">
            <img src={WhatsAppIcon} alt="WhatsApp" />
          </a>

          <div className={cls.contact__phoneWrapper}>
            <img src={PhoneIcon} alt="Phone" />
            <a className={cls.contact__phoneNum} href="tel:+7 700 001 18 88">
              +7 700 001 18 88
            </a>
          </div>
        </div>
        <nav className="">
          <ul className={cls.NavLink}>
            {headerArr.map(title => (
              <li key={title} className={cls.NavLink__List}>
                <a className={cls.NavLink__link} href="/">
                  {title}
                  <span className={cls.NavLink__span}></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
})
