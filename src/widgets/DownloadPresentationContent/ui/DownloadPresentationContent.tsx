import { memo } from 'react';
import clsx from 'clsx';
import * as cls from './DownloadPresentationContent.module.scss';

interface DownloadPresentationContentProps {
    className?: string;
}

export const DownloadPresentationContent = memo(
    (props: DownloadPresentationContentProps) => {
        const { className } = props;

        return (
            <div className={clsx(cls.DownloadPresentationContent, className)}>
                <h2 className={cls.DownloadPresentationContent__title}>
                    Скачать презентацию
                </h2>
                <p className={cls.DownloadPresentationContent__paragraph}>
                    Оставьте свои контакты и мы вам вышлем
                </p>
                <form action="">
                    <div
                        className={cls.DownloadPresentationContent__gridInputs}
                    >
                        <input
                            className={cls.DownloadPresentationContent__input1}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ваше имя"
                            required
                        />
                        <input
                            className={cls.DownloadPresentationContent__input2}
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Номер телефона"
                            required
                        />
                        <button
                            type="submit"
                            className={cls.DownloadPresentationContent__button}
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        );
    },
);
