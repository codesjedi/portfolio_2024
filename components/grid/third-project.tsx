import projectImage from '@/public/projects/laravel-pos.png';
import Project from '../project';

export default function ThirdProject() {
    return (
        <Project
            projectUrl={`https://commerce-eg.vercel.app/es`}
            projectName='E-commerce template'
            projectImage={projectImage}
            backgroundColor='bg-blue-100'
        />
    );
}
