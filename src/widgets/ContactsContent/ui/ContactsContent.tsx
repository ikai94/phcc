import { memo } from 'react'
import clsx from 'clsx'
import * as cls from './ContactsContent.module.scss'
import Scan from 'shared/assets/images/scan.png'
import {contactsObj} from "shared/const/contacts";
import {ContactsSection} from "shared/ui/ContactsSection/ContactsSection";
import {Flex} from "shared/ui/Flex";


interface ContactsContentProps {
    className?: string
}

export const ContactsContent = memo((props: ContactsContentProps) => {
    const { className } = props

    return (
        <div className={clsx(cls.ContactsContent, className)}>
                <div className={cls.ContactsContent__map}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5b8b7903044736d3a129b4ddf89ea3c630fee3b727a8b02471ba4ece9b3ee42b&amp;source=constructor"
                        width="578"
                        height="428"
                        frameBorder="0"
                    ></iframe>
                </div>
                <div className={cls.ContactsContent__inner}>
                    <h2 className={cls.ContactsContent__title}>
                        Контакты
                    </h2>
                    <p className={cls.ContactsContent__paragraph}>
                        ул. Кунаева 10, БЦ “Изумрудный”, блок - А, этаж 1
                    </p>
                    <Flex className={cls.ContactsContent__right}>
                        <address>
                            {contactsObj.contactsContent.map((item) => (
                                <ContactsSection key={item.alt} text={item.text} href={item.href} alt={item.alt} src={item.src} />
                            ))}
                        </address>
                        <div className={cls.ContactsContent__imageSrc}>
                            <img
                                className={cls.img}
                                src={Scan}
                                alt="scan"
                            />
                        </div>
                    </Flex>
                </div>
        </div>
    )
})
