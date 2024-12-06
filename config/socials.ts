import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaProductHunt } from 'react-icons/fa6';

export interface Social {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Social[] = [
    {
        name: 'Github',
        url: 'https://github.com/codesjedi/',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/fenriquegimenez',
        icon: FaLinkedin,
    },
    {
        name: 'ProductHunt',
        url: 'https://www.producthunt.com/@enrique_gimenez',
        icon: FaProductHunt,
    },
];

export default socials;
