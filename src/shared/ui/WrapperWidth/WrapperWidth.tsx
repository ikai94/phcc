import clsx from 'clsx'
import * as cls from './WrapperWidth.module.scss'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface WrapperWidthProps extends DivProps {
    className?: string
    children: ReactNode
}

export const WrapperWidth = (props: WrapperWidthProps) => {
    const { children, className } = props
    return <div className={clsx(cls.WrapperWidth, className)}>{children}</div>
}
