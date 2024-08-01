import { IHeaderContent, IHeaderNavContent } from 'shared/types/types';

export const headerArr: IHeaderNavContent = {
    headerContent: [
        { title: 'О проекте', href: '#aboutProject' },
        { title: 'Локация', href: '#location' },
        { title: 'Преимущества', href: '#mainAdvantages' },
        { title: 'Почему мы?', href: '#why' },
        { title: 'Способы оплаты', href: '#payment' },
        { title: 'Контакты', href: '#contacts' },
    ],
};

export const headerPage: IHeaderContent = {
    headerContentRight: [
        {
            spanBlock: 'Строительные работы',
            textBlock: 'начались в сентября 2021 года.',
        },
        {
            spanBlock: 'Срок сдачи',
            textBlock: 'коттеджей - I квартал 2022 года',
        },
        {
            spanBlock: 'Срок сдачи',
            textBlock: 'всего коттеджного городка - II квартал 2022 года',
        },
    ],
};
