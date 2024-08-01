import { memo } from 'react';
import clsx from 'clsx';
import * as cls from './LocationContent.module.scss';
import LocationImg from 'shared/assets/images/location.jpg';
import LocationBackground from 'shared/assets/images/location-background.jpg';
import LocationDots from 'shared/assets/images/dots-2.png';

interface LocationContentProps {
    className?: string;
}

export const LocationContent = memo((props: LocationContentProps) => {
    const { className } = props;

    return (
        <div className={clsx(cls.LocationContent, className)}>
            <div className={cls.LocationContent__leftContent}>
                <h3 className={cls.LocationContentTitle}>Локация</h3>
                <p className={cls.LocationContentParagraph}>
                    Закрытый коттеджный городок Nura Elite расположен в элитном
                    и перспективном районе столицы, рядом с зелёным поясом по
                    соседству с Vella Village.
                    <br />
                    <br />
                    Nura Elite - это прекрасное пространство для уединения и
                    активной семейной жизни в гармонии с природой, без
                    городского шума с удобной транспортной развязкой.
                </p>
            </div>
            <div className={cls.LocationContent__rightContent}>
                <div className={cls.LocationContentImage1}>
                    <img
                        className={cls.LocationContentImage1__img1}
                        src={LocationImg}
                        alt="location"
                    />
                </div>
                <div className={cls.LocationContentImage2}>
                    <img
                        className={cls.LocationContentImage2__img2}
                        src={LocationBackground}
                        alt="location-background"
                    />
                </div>
                <div className={cls.LocationContentImage3}>
                    <img
                        className={cls.LocationContentImage3__img3}
                        src={LocationDots}
                        alt="dots"
                    />
                </div>
            </div>
        </div>
    );
});
