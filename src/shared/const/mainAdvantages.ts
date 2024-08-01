import { IMainAdvantagesContent } from '../types/types';
import ClarityMapLine from 'shared/assets/images/clarity_map-line.png';
import ProtectionIcon from 'shared/assets/images/protection-icon.png';
import Fence from 'shared/assets/images/fence.png';
import SofaIcon from 'shared/assets/images/sofa-icon.png';
import HouseIcon from 'shared/assets/images/houce-icon.png';
import MobileIcon from 'shared/assets/images/mobile-icon.png';

export const mainAdvantagesObj: IMainAdvantagesContent = {
    mainAdvantagesContentTop: [
        {
            text: 'Выгодное месторасположение',
            src: ClarityMapLine,
            alt: 'clarity_map-line',
        },
        {
            text: 'Охраняемая территория',
            src: ProtectionIcon,
            alt: 'protection-icon',
        },
        {
            text: 'Городок по периметру ограждён 3-метровым забором',
            src: Fence,
            alt: 'fence',
        },
        {
            text: 'Здесь вы почувствуете уединенность, безопасностьи комфорт',
            src: SofaIcon,
            alt: 'sofa',
        },
    ],
    mainAdvantagesContentBottom: [
        {
            text: 'Индивидуальные участки ограждены 2-метровыми заборами',
            src: HouseIcon,
            alt: 'house',
        },
        { text: 'Cобственное приложение', src: MobileIcon, alt: 'mobile' },
    ],
};
