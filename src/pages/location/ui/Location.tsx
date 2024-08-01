import clsx from 'clsx';
import * as cls from './Location.module.scss';
import { WrapperWidth } from 'shared/ui/WrapperWidth';
import { LocationContent } from 'widgets/LocationContent';

interface LocationProps {
    className?: string;
}

export const Location = ({ className }: LocationProps) => {
    return (
        <div id="location" className={clsx(cls.Location, className)}>
            <WrapperWidth className={cls.LocationWidth}>
                <h1 className={cls.LocationBackTitle}>Локация</h1>
                <LocationContent />
            </WrapperWidth>
        </div>
    );
};
