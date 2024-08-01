export interface IHeaderObj {
    textBlock: string;
    spanBlock: string;
}

export interface IAboutProjectObj {
    title: string;
    text: string;
}

export interface IHeaderContent {
    headerContentRight: IHeaderObj[];
}

export interface IAboutProjectContent {
    aboutProjectText: IAboutProjectObj[];
}

export interface IMainAdvantagesObj {
    src: string;
    text: string;
    alt: string;
}

export interface IMainAdvantagesContent {
    mainAdvantagesContentTop: IMainAdvantagesObj[];
    mainAdvantagesContentBottom: IMainAdvantagesObj[];
}

export interface IWhySectionObj {
    src: string;
    title: string;
    text: string;
    alt: string;
}

export interface IWhySectionContent {
    whySectionContent: IWhySectionObj[];
}

export interface ITechnologyObj {
    src: string;
    title: string;
    text: string;
    alt: string;
    width: string;
    height: string;
}

export interface ITechnologyContent {
    technologyContentLeft: ITechnologyObj[];
    technologyContentRight: ITechnologyObj[];
}

export interface IPaymentObj {
    src: string;
    text: string;
    alt: string;
}

export interface IPaymentContent {
    paymentContent: IPaymentObj[];
}

export interface IContactsObj {
    src: string;
    text: string;
    alt: string;
    href: string;
}

export interface IContactsContent {
    contactsContent: IContactsObj[];
}

export interface IFooterObj {
    text: string;
    href: string;
}

export interface IFooterContent {
    footerContent: IFooterObj[];
}

export interface IHeaderObj {
    textBlock: string;
    spanBlock: string;
}

export interface IHeaderContent {
    headerContentRight: IHeaderObj[];
}

export interface IHeaderNavObj {
    title: string;
    href: string;
}

export interface IHeaderNavContent {
    headerContent: IHeaderNavObj[];
}
