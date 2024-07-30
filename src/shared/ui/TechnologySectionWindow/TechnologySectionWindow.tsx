import clsx from 'clsx'
import * as cls from './TechnologySectionWindow.module.scss'

interface TechnologySectionWindowProps {
    className?: string;
    title: string;
    text: string;
    src: string;
    alt: string;
    height: string;
    width: string;
}

export const TechnologySectionWindow = (props: TechnologySectionWindowProps) => {
    const {className, src, text, title, alt, width, height} = props
    return (
        <div className={clsx(cls.TechnologySectionWindow, className)}>
                <img
                    className={cls.TechnologySectionWindow__img}
                    src={src}
                    alt={alt}
                    height={height}
                    width={width
                }
                />
                <h3
                    className={cls.TechnologySectionWindow__title}
                >
                    {title}
                </h3>
                <p
                    className={cls.TechnologySectionWindow__paragraph}
                >
                    {text}
                </p>
        </div>
    )
}
