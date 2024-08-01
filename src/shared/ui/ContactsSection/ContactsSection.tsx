import clsx from 'clsx';
import * as cls from './ContactsSection.module.scss';

interface ContactsSectionProps {
    className?: string;
    text: string;
    href: string;
    alt: string;
    src: string;
}

export const ContactsSection = (props: ContactsSectionProps) => {
    const { className, src, href, text, alt } = props;
    return (
        <div className={clsx(cls.ContactsSection)}>
            <img className={cls.ContactsSection__img} src={src} alt={alt} />
            <a className={cls.ContactsSection__link} href={href}>
                {text}
            </a>
        </div>
    );
};
