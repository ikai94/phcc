import * as cls from './WhySection.module.scss';
import { WhySectionContent } from 'widgets/WhySectionContent';
import { WrapperWidth } from 'shared/ui/WrapperWidth';

export const WhySection = () => {
    return (
        <div id="why">
            <WrapperWidth className={cls.whySection}>
                <h1 className={cls.whySectionBackTitle}>ПОЧЕМУ NURA ELITE?</h1>
                <WhySectionContent />
            </WrapperWidth>
        </div>
    );
};
