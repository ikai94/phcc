import clsx from 'clsx'
import * as cls from './PaymentContentSection.module.scss'

interface PaymentContentSectionProps {
    className?: string;
    text: string;
    src: string;
    alt: string;
}

export const PaymentContentSection = (props: PaymentContentSectionProps) => {
    const {className, src, text, alt} = props
    return (
        <div className={clsx(cls.PaymentContentSection, className)}>
                <img
                    className={cls.PaymentContentSection__img}
                    src={src}
                    alt={alt}
                />
                <p className={cls.PaymentContentSection__text}>
                    {text}
                </p>
        </div>
    )
}
