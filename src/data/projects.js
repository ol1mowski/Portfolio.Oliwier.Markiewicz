import courses from '../assets/images/projects/courses.webp';
import hotel from '../assets/images/projects/hotel.webp';
import misia from '../assets/images/projects/photo.webp';

export const projects = [
    {
        id: 1,
        img: courses,
        title: 'Courses shop',
        date: 'November 2023',
        describe: 'A Courses shop website is an online platform that allows users to buy courses for personal or business use.',
        technologies: ['React','SCSS'],
        githubLink: 'https://github.com/ol1mowski/it-shop.de',
        pageLink: 'https://ol1mowski.github.io/it-shop.de/',
        reverse: false,
    },
    {
        id: 2,
        img: misia,
        title: 'photographer portfolio',
        date: 'December 2023',
        describe: `This is a stunning and interactive photographer's portfolio website built using React.`,
        technologies: ['React','SCSS'],
        githubLink: 'https://github.com/ol1mowski/Misia_photo.de',
        pageLink: 'https://ol1mowski.github.io/Misia_photo.de/',
        reverse: true,
    },
    {
        id: 3,
        img: hotel,
        title: 'Hotel webpage',
        date: 'July 2023',
        describe: 'My hotel website is your gateway to an unforgettable travel experience. Site have user-friendly online booking system that allows you to plan your stay with ease.',
        technologies: ['React','SCSS'],
        githubLink: 'https://github.com/ol1mowski/Best_hotel.de',
        pageLink: 'https://ol1mowski.github.io/Best_hotel.de/',
        reverse: false,
    },
]