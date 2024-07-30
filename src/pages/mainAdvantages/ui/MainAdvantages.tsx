import clsx from 'clsx'
import * as cls from './MainAdvantages.module.scss'
import {WrapperWidth} from "shared/ui/WrapperWidth";
import {MainAdvantagesDescriptionIcon} from "shared/ui/MainAdvantagesDescriptionIcon";
import {MainAdvantagesContent} from "../../../widgets/MainAdvantagesContent";

interface MainAdvantagesProps {
    className?: string
}

export const MainAdvantages = ({ className }: MainAdvantagesProps) => {
    return (
        <div className={clsx(cls.MainAdvantages, className)}>
                    <WrapperWidth className={cls.MainAdvantagesWrapper}>
                        <h1 className={cls.MainAdvantagesTitle}>
                            Основные преимущества <br/>
                            городка
                        </h1>
                        <MainAdvantagesContent />
                    </WrapperWidth>
        </div>
    )
}
