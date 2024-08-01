import clsx from 'clsx';
import * as cls from './Technology.module.scss';
import { WrapperWidth } from 'shared/ui/WrapperWidth';
import { TechnologyContent } from 'widgets/TechnologyContent';

interface TechnologyProps {
    className?: string;
}

export const Technology = ({ className }: TechnologyProps) => {
    return (
        <div className={clsx(cls.Technology, className)}>
            <WrapperWidth className={cls.Technology__inner}>
                <h1 className={cls.Technology__backTitle}>Технология</h1>
                <TechnologyContent />
            </WrapperWidth>
        </div>
    );
};
