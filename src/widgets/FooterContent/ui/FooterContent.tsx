import { memo } from 'react'
import clsx from 'clsx'
import * as cls from './FooterContent.module.scss'
import {footerObj} from "shared/const/footer";
import {FooterSection} from "shared/ui/FooterSection";


interface FooterContentProps {
    className?: string
}

export const FooterContent = memo((props: FooterContentProps) => {
    const { className } = props

    return (
        <div className={clsx(cls.FooterContent, className)}>
            {footerObj.footerContent.map((props) => (
                <FooterSection key={props.href} text={props.text} href={props.href} />
            ))}
        </div>
    )
})
