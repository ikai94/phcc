import clsx from 'clsx';
import * as cls from './BackTitle.module.scss';
import { ReactNode } from 'react';

interface BackTitleProps {
    className?: string;
    children: ReactNode;
}

export const BackTitle = (props: BackTitleProps) => {
    const { children, className } = props;
    return <h1 className={clsx(cls.BackTitle, className)}>{children}</h1>;
};
