import clsx from 'clsx'
import * as cls from './Header.module.scss'
import {Navbar} from "widgets/Navbar";
import {ContentHeader} from "widgets/ContentHeader";


interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={clsx(cls.header, className)}>
      <div className={cls.header__wrapper}>
        <Navbar />
        <ContentHeader/>
      </div>
    </header>
  )
}
