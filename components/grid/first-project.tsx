import projectImage from '@/public/projects/next-blog-starter.png';
import Project from '../project';

export default function FirstProject() {
    return (
        <Project
            projectUrl='https://whatsapp.enriquegimenez.me'
            projectName='Whatsapp Linker'
            projectImage={projectImage}
            backgroundColor='bg-red-100'
        />
    );
}
