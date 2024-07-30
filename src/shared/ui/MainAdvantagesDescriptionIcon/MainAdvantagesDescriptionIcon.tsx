import clsx from 'clsx'
import * as cls from './MainAdvantagesDescriptionIcon.module.scss'

interface MainAdvantagesDescriptionIconProps {
    className?: string;
    text: string;
    src: string;
    alt: string;
}

export const MainAdvantagesDescriptionIcon = (props: MainAdvantagesDescriptionIconProps) => {
    const {className, src, text, alt} = props
    return (
        <div className={clsx(cls.MainAdvantagesDescriptionIcon)}>
                <div className={cls.WrapperIcon}>
                    <img
                        className={cls.WrapperIconImg}
                        src={src}
                        alt={alt}
                    />
                </div>
                <div className={clsx(cls.Paragraph, className)}>
                    {text}
                </div>
        </div>
    )
}
