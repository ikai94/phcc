import clsx from 'clsx'
import * as cls from './WhySectionDescriptionIcon.module.scss'

interface WhySectionDescriptionIconProps {
    className?: string;
    title: string;
    text: string;
    src: string;
    alt: string;
}

export const WhySectionDescriptionIcon = (props: WhySectionDescriptionIconProps) => {
    const {className, src, text, title, alt} = props
    return (
        <div className={clsx(cls.WhySectionDescriptionIcon, className)}>
                <img
                    className={cls.WhySectionDescriptionIcon__img}
                    src={src}
                    alt={alt}
                />
                <div className={cls.WhySectionDescriptionIcon__paragraph}>
                    <h3
                        className={cls.WhySectionDescriptionIcon__title}
                    >
                        {title}
                    </h3>
                    <p
                        className={cls.WhySectionDescriptionIcon__text}
                    >
                        {text}
                    </p>
                </div>
        </div>
    )
}
