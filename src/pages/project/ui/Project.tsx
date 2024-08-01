import clsx from 'clsx';
import * as cls from './Project.module.scss';
import { WrapperWidth } from '../../../shared/ui/WrapperWidth';
import { ProjectsContent } from '../../../widgets/ProjectsContent';

interface ProjectProps {
    className?: string;
}

export const Project = ({ className }: ProjectProps) => {
    return (
        <div className={clsx(cls.Project, className)}>
            <WrapperWidth className={cls.Project__width}>
                <ProjectsContent />
            </WrapperWidth>
        </div>
    );
};
