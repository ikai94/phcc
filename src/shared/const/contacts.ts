import {IContactsContent} from "../types/types";
import Phone from 'shared/assets/icons/cil_phone.svg'
import Mail from 'shared/assets/icons/mail-icon.svg'
import Inst from 'shared/assets/icons/inst.svg'

export const contactsObj: IContactsContent = {
    contactsContent: [
        { text: '+7 (700) 001-18-88', src: Phone, alt: 'Телефон', href: 'tel:+77000011888' },
        { text: 'info@nuramm.kz', src: Mail, alt: 'Почта', href: 'mailto:info@nuramm.kz' },
        { text: '@nura.premier', src: Inst, alt: 'Инстаграмм”', href: '/' },
    ],
}
