import projectImage from '@/public/projects/api-collection.png';
import Project from '../project';

export default function SecondProject() {
    return (
        <Project
            projectUrl='https://www.egfactory.co/'
            projectName='EG Software Factory'
            projectImage={projectImage}
            backgroundColor='bg-orange-100'
        />
    );
}
