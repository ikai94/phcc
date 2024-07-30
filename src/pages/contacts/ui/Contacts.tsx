import clsx from 'clsx'
import * as cls from './Contacts.module.scss'
import {WrapperWidth} from "shared/ui/WrapperWidth";
import {ContactsContent} from "widgets/ContactsContent";

interface ContactsProps {
    className?: string
}

export const Contacts = ({ className }: ContactsProps) => {
    return (
        <div className={clsx(cls.Contacts, className)}>
                <WrapperWidth>
                    <ContactsContent />
                </WrapperWidth>
        </div>
    )
}
