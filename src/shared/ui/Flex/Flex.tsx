import clsx from 'clsx';
import * as cls from './Flex.module.scss';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
}

export const Flex = (props: FlexProps) => {
    const { children, className } = props;
    return <div className={clsx(cls.Flex, className)}>{children}</div>;
};
