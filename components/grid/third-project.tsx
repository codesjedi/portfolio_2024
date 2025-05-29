import projectImage from '@/public/projects/gallery.png';
import Project from '../project';

export default function ThirdProject() {
  return (
    <Project
      projectUrl={`https://gallery.enriquegimenez.me`}
      projectName="Art Gallery"
      projectImage={projectImage}
      backgroundColor="bg-blue-100"
    />
  );
}
