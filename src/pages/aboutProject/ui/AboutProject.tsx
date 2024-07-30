import clsx from 'clsx'
import * as cls from './AboutProject.module.scss'
import {WrapperWidth} from "shared/ui/WrapperWidth";
import {AboutProjectContent} from "widgets/AboutProjectContent";

interface AboutProjectProps {
  className?: string
}

export const AboutProject = ({ className }: AboutProjectProps) => {
  return (
    <div className={clsx(cls.AboutProject, className)}>
        <WrapperWidth className={cls.AboutProject__inner}>
            <h1 className={cls.AboutProject__backTitle}>
                О проекте
            </h1>
            <AboutProjectContent/>
        </WrapperWidth>
    </div>
  )
}
