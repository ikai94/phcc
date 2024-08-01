import { memo } from 'react';
import * as cls from './TechnologyContent.module.scss';
import { Flex } from 'shared/ui/Flex';
import { technologyObj } from 'shared/const/technology';
import { TechnologySectionWindow } from 'shared/ui/TechnologySectionWindow';

export const TechnologyContent = memo(() => {
    return (
        <div className={cls.TechnologyContent}>
            <h2 className={cls.TechnologyContent__title}>
                Технология строения
            </h2>
            <Flex className={cls.TechnologyContentFlex}>
                <div className={cls.TechnologyContent__left}>
                    {technologyObj.technologyContentLeft.map((props) => (
                        <TechnologySectionWindow
                            key={props.alt}
                            title={props.title}
                            text={props.text}
                            src={props.src}
                            alt={props.alt}
                            height={props.height}
                            width={props.width}
                        />
                    ))}
                </div>
                <div className={cls.TechnologyContent__right}>
                    {technologyObj.technologyContentRight.map((props) => (
                        <TechnologySectionWindow
                            key={props.alt}
                            title={props.title}
                            text={props.text}
                            src={props.src}
                            alt={props.alt}
                            height={props.height}
                            width={props.width}
                        />
                    ))}
                </div>
            </Flex>
        </div>
    );
});
