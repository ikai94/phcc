import { memo } from 'react';
import * as cls from './WhySectionContent.module.scss';
import { Flex } from 'shared/ui/Flex';
import { whySectionObj } from 'shared/const/whySection';
import WhyImg from 'shared/assets/images/why.jpg';
import WhyImgRed from 'shared/assets/images/why-red.png';
import WhyImgDots from 'shared/assets/images/dots-3.png';
import { WhySectionDescriptionIcon } from 'shared/ui/WhySectionDescriptionIcon';

export const WhySectionContent = memo(() => {
    return (
        <div className={cls.WhySectionContent}>
            <h2 className={cls.WhySectionContent__title}>ПОЧЕМУ NURA ELITE?</h2>
            <Flex className={cls.WhySectionContentFlex}>
                <div className={cls.WhySectionContentLeft}>
                    <div className={cls.WhySectionContentLeftImg1}>
                        <img
                            className={cls.WhySectionContentLeft__img1}
                            src={WhyImg}
                            alt="why"
                        />
                    </div>
                    <div className={cls.WhySectionContentLeftImg2}>
                        <img
                            className={cls.WhySectionContentLeft__img2}
                            src={WhyImgRed}
                            alt="why-red"
                        />
                    </div>
                    <div className={cls.WhySectionContentLeftImg3}>
                        <img
                            className={cls.WhySectionContentLeft__img3}
                            src={WhyImgDots}
                            alt="why-dots"
                        />
                    </div>
                </div>
                <div className={cls.WhySectionContentRight}>
                    {whySectionObj.whySectionContent.map((props) => (
                        <WhySectionDescriptionIcon
                            key={props.alt}
                            title={props.title}
                            text={props.text}
                            src={props.src}
                            alt={props.alt}
                        />
                    ))}
                </div>
            </Flex>
        </div>
    );
});
