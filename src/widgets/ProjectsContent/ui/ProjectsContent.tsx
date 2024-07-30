import { memo } from 'react'
import * as cls from './ProjectsContent.module.scss'
import Cottage1 from 'shared/assets/images/cottage-1.jpg'
import Dots2 from 'shared/assets/images/dots-2.png'
import Schema1 from 'shared/assets/images/scheme-1.png'

export const ProjectsContent = memo(() => {

    return (
        <>
        <h1 className={cls.ProjectsContentTitle}>
            Коттедж
        </h1>

    <div className={cls.ProjectContent}>
        <div className={cls.ProjectContent__leftImg1}>
            <img
                className={cls.ProjectContent__Img}
                src={Cottage1}
                alt="cottage"
            />
        </div>
        <div className={cls.ProjectContent__leftImg2}>
            <img
                className={cls.ProjectContent__Img}
                src={Dots2}
                alt="dots"
            />
        </div>
        <div className={cls.ProjectContent__right}>
            <h3 className={cls.RightTitle}>
                179 м2
            </h3>
            <div className={cls.RightImg1}>
                <img
                    alt="nature"
                    className={cls.ProjectContent__Img}
                    src={Schema1}
                />
            </div>
        </div>
    </div>
        </>
    )
})
