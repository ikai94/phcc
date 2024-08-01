import { IWhySectionContent } from '../types/types';
import EnergyIcon from 'shared/assets/icons/energy-icon.svg';
import Protect from 'shared/assets/icons/protect.svg';
import Eco from 'shared/assets/icons/eco.svg';
import Communications from 'shared/assets/icons/communications.svg';

export const whySectionObj: IWhySectionContent = {
    whySectionContent: [
        {
            title: 'Энергоэффектиность',
            text: 'Дома сохраняют тепло зимой и прохладу летом',
            src: EnergyIcon,
            alt: 'Energy icon',
        },
        {
            title: 'Экологически чистый район',
            text: 'Городок расположен рядом с лесополосой и к.Нура-Есиль',
            src: Eco,
            alt: 'Eco',
        },
        {
            title: 'Безопасность',
            text: 'Закрытый городок с круглосуточным видеонаблюдением',
            src: Protect,
            alt: 'Protect',
        },
        {
            title: 'Коммуникации',
            text: 'Централизованное водоснабжение, энергоснабжение и канализация.',
            src: Communications,
            alt: 'Communications',
        },
    ],
};
