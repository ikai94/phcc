import clsx from 'clsx';
import * as cls from './DownloadPresentation.module.scss';
import { WrapperWidth } from 'shared/ui/WrapperWidth';
import { DownloadPresentationContent } from 'widgets/DownloadPresentationContent';

interface DownloadPresentationProps {
    className?: string;
}

export const DownloadPresentation = ({
    className,
}: DownloadPresentationProps) => {
    return (
        <div className={clsx(cls.DownloadPresentation, className)}>
            <WrapperWidth className={cls.DownloadPresentation__inner}>
                <DownloadPresentationContent />
            </WrapperWidth>
        </div>
    );
};
