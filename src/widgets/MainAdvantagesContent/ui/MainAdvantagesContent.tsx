import { memo } from 'react'
import {MainAdvantagesDescriptionIcon} from "shared/ui/MainAdvantagesDescriptionIcon";
import MainAdvantageImg from 'shared/assets/images/main-advantage.jpg'
import BrickIcon from 'shared/assets/images/brick-icon.png'
import * as cls from './MainAdvantagesContent.module.scss'
import {mainAdvantagesObj} from "../../../shared/const/mainAdvantages";


export const MainAdvantagesContent = memo(() => {

    return (
        <div className={cls.MainAdvantagesContent}>
            <div className={cls.MainAdvantagesContentGrid}>
                {mainAdvantagesObj.mainAdvantagesContentTop.map((props) => (
                    <MainAdvantagesDescriptionIcon key={props.alt} className={cls.MainAdvantagesContentAllIcon} text={props.text} src={props.src} alt={props.alt} />
                ) )}
            </div>
            <div className={cls.MainAdvantagesContentImgInner}>
                <img
                    className={cls.MainAdvantagesContentImgInner__image}
                    src={MainAdvantageImg}
                    alt="main-advantage"
                    width="900"
                    height="546"
                />
            </div>
            <div className={cls.MainAdvantagesContentGrid}>
                {mainAdvantagesObj.mainAdvantagesContentBottom.map((props) => (
                    <MainAdvantagesDescriptionIcon key={props.alt} className={cls.MainAdvantagesContentAllIcon} text={props.text} src={props.src} alt={props.alt} />
                ))}
            </div>
            <div className={cls.MainAdvantagesContentBricksBottom} >
                <MainAdvantagesDescriptionIcon className={cls.MainAdvantagesContentBricks} text={"Каждому владельцу коттеджа даётся возможность на своем земельном участке возводить дополнительные застройки: баню, сауну, летнюю кухню и др."} src={BrickIcon} alt={"bricks"} />
            </div>
        </div>
    )
})
