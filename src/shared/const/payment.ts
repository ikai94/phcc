import { IPaymentContent } from '../types/types';
import Banner1 from 'shared/assets/images/banner-1.jpg';
import Banner2 from 'shared/assets/images/banner-2.jpg';
import Banner3 from 'shared/assets/images/banner-3.jpg';
import Banner4 from 'shared/assets/images/banner-4.png';

export const paymentObj: IPaymentContent = {
    paymentContent: [
        {
            text: 'Получение займа \n через АО “ЖилСтройСберБанк',
            src: Banner1,
            alt: 'Получение займа через АО “ЖилСтройСберБанк”',
        },
        {
            text: 'Получение беспроцентной рассрочки от застройщика  NURA ELITE',
            src: Banner2,
            alt: ' NURA ELITE',
        },
        {
            text: 'Казахстанская Ипотечная Компания «Орда»',
            src: Banner3,
            alt: 'Казахстанская Ипотечная Компания «Орда»',
        },
        {
            text: 'Оплата криптовалютой (Биткоин)',
            src: Banner4,
            alt: 'Оплата криптовалютой (Биткоин)',
        },
    ],
};
