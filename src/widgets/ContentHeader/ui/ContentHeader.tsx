import { memo } from 'react';
import * as cls from './ContentHeader.module.scss';
import clsx from 'clsx';
import { Flex } from 'shared/ui/Flex';
import { headerPage } from 'shared/const/header';

interface ContentHeaderProps {
    className?: string;
}

export const ContentHeader = memo((props: ContentHeaderProps) => {
    const { className } = props;

    return (
        <div className={clsx(cls.ContentHeader, className)}>
            <div className={cls.ContentHeader__wrapper}>
                <h1 className={cls.ContentHeader__title}>
                    Элитный коттеджный городок в г. Нур-Султан
                </h1>
                <a href="/" className={cls.ContentHeader__button}>
                    Скачать презентацию
                </a>
                <h3 className={cls.ContentHeader__paragraph}>36 коттеджей</h3>
                <Flex>
                    <Flex>
                        <span className={cls.Paragraph__span}>3</span>
                        <p className={cls.Paragraph__text}>
                            коттеджа 368 м2 на 10 сотках
                        </p>
                    </Flex>
                    <Flex className={cls.paragraph}>
                        <span className={cls.Paragraph__span}>33</span>
                        <p className={cls.Paragraph__text}>
                            коттеджа 179 м2 на 5 сотках
                        </p>
                    </Flex>
                </Flex>
            </div>

            <div className={cls.Content__ParagraphRight}>
                {headerPage.headerContentRight.map((item) => (
                    <p
                        key={item.textBlock}
                        className={cls.Paragraph__textBlock}
                    >
                        <span className={cls.Paragraph__textSpan}>
                            {item.spanBlock}
                        </span>
                        &nbsp;{item.textBlock}
                    </p>
                ))}
            </div>
        </div>
    );
});
