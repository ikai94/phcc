import clsx from 'clsx'
import * as cls from './Footer.module.scss'
import {WrapperWidth} from "shared/ui/WrapperWidth";
import {FooterContent} from "widgets/FooterContent";

interface FooterProps {
    className?: string
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={clsx(cls.Footer, className)}>
                <WrapperWidth className={cls.Footer__inner}>
                   <FooterContent />
                </WrapperWidth>
        </footer>
    )
}
