import clsx from 'clsx';
import * as cls from './FooterSection.module.scss';

interface FooterSectionProps {
    className?: string;
    text: string;
    href: string;
}

export const FooterSection = (props: FooterSectionProps) => {
    const { className, href, text } = props;
    return (
        <a className={clsx(cls.FooterSection)} href={href}>
            {text}
        </a>
    );
};
