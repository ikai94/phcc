import { memo } from 'react'
import Rectangle1 from 'shared/assets/images/Rectangle1.jpg'
import Rectangle2 from 'shared/assets/images/Rectangle2.jpg'
import Rectangle3 from 'shared/assets/images/Rectangle3.jpg'
import * as cls from './AboutProjectContent.module.scss'
import clsx from 'clsx'

interface AboutProjectContentProps {
    className?: string
}

export const AboutProjectContent = memo((props: AboutProjectContentProps) => {
    const { className } = props

    return (
        <div className={clsx(cls.AboutProjectContent, className)}>
            <div className={cls.AboutProjectContentLeft}>
                <h2 className={cls.AboutProjectContentLeft__title}>О проекте</h2>
                <p className={cls.TextContent} style={{marginBottom: '1.25rem'}}>
                    Элитный закрытый коттеджный городок в г. Нур-Султан состоящий из:
                </p>

                <span className={cls.TitleContent}>36 коттеджей:</span>
                <p className={cls.TextContent}>- 368 м2 на 10 сотках</p>
                <p className={clsx(cls.TextContent, cls.TextContentAdditional)}>
                    - 179 м2 на 5 сотках
                </p>
                <h3 className={cls.TitleContent} style={{marginBottom: '1.25rem'}}>
                    О компании
                </h3>
                <p className={clsx(cls.TextContent, cls.TextContentAdditional)}>
                    “MM Group” Группа Строительных Компании – современная и динамично развивающаяся группа компаний,
                    оказывающая широкий спектр услуг в строительном бизнесе от проектирования до сдачи объектов под ключ.
                    Свою деятельность в строительном бизнесе начала осуществлять с 2013 года и прочно зарекомендовала себя
                    надежной Казахстанской строительной компанией не только на территории Республики Казахстан, но и за
                    рубежом. Учредителем и генеральным директором группы строительных компаний «MM Group» является - Мольдир
                    Суюншали.
                </p>
                <h3 className={cls.TitleContent} style={{marginBottom: '1.25rem'}}>Миссия</h3>
                <p className={clsx(cls.TextContent, cls.TextContentAdditional)}>
                    Приоритетом группы строительных компаний «MM Group» является профессиональный подход с применением
                    инновационных решении в строительстве воздвигаемых объектов, опытный коллектив, качественные материалы
                    и своевременность сдачи объектов с доступной возможностью приобретения не только жилья, но и других
                    объектов недвижимости.
                </p>
            </div>
            <div className={cls.AboutProjectContentRight}>
                <div className={cls.AboutProjectContentRight__image1}>
                    <img style={{zIndex:10}} src={Rectangle1} alt="Rectangle" loading="lazy" />
                </div>
                <div className={cls.AboutProjectContentRight__image2}>
                    <img
                        className={cls.AboutProjectContentRight__img2}
                        src={Rectangle2}
                        alt=""
                    />
                </div>
                <div className={cls.AboutProjectContentRight__image3}>
                    <img
                        className={cls.AboutProjectContentRight__img3}
                        src={Rectangle3}
                        alt=""
                    />
                </div>
                <h3 className={clsx(cls.TitleContent, cls.TitleContentAdditional)} style={{marginBottom: '1.25rem'}}>
                    Цель
                </h3>
                <p className={cls.TextContent}>
                    Укрепление статуса компании, которая способна обеспечить потребителя доступной и качественной
                    недвижимостью в срок. Развитие, надежность и качество!
                </p>
            </div>
        </div>
    )
})
