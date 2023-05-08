import nivaly from '../public/assets/projects/nivaly.jpg'
import booklub from '../public/assets/projects/booklub.jpg'
import spacestagram from '../public/assets/projects/spacestagram.jpg'
import api01 from '../public/assets/projects/api-01.jpg'
import api02 from '../public/assets/projects/api-02.jpg'
import sorting from '../public/assets/projects/sorting.jpg'
import maplebarber from '../public/assets/projects/maplebarber.jpg'
import dottir from '../public/assets/projects/slideshow/dottir.jpg'

import SSS_1 from '../public/assets/projects/slideshow/SSS_1.jpg'
import SSS_2 from '../public/assets/projects/slideshow/SSS_2.jpg'
import SSS_3 from '../public/assets/projects/slideshow/SSS_3.jpg'
import SSS_4 from '../public/assets/projects/slideshow/SSS_4.jpg'

import nivaly_1 from '../public/assets/projects/slideshow/nivaly_1.jpg'
import nivaly_2 from '../public/assets/projects/slideshow/nivaly_2.jpg'
import nivaly_3 from '../public/assets/projects/slideshow/nivaly_3.jpg'

import demosaic_1 from '../public/assets/projects/slideshow/demosaic_1.jpg'
import demosaic_2 from '../public/assets/projects/slideshow/demosaic_2.jpg'
import demosaic_3 from '../public/assets/projects/slideshow/demosaic_3.jpg'


// Add teamm members, personal role, date, more images, featurees

const projects = [
    {
        id: 1,
        name: 'Smart Security System',
        image: SSS_1,
        tags: ['Machine Learning', 'Algorithms', 'LBPH', 'Facial Recognition', 'Webapp', 'Embedded Systems', 'Image Processing', 'SSH'],
        skills: ['Python', 'Flask', 'OpenCV', 'Numpy', 'HTML', 'CSS', 'JavaScript', 'Putty', 'RPI 4B' ],
        features: [
        {title: 'Alerting System', description: 'A real time, full functional and full customizable alerting system that warns the user when a known or unknown face is detected '}, 
        {title: 'Versatlity', description: 'Full control over SSH connection and what email recieves alerts!'}, 
        {title: 'Model Training', description: 'train model everytime a new face is captured'},
        ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        githubUrl: 'https://github.com/Atiqul-Isla/smart-video-system',
        slideImages: [SSS_1, SSS_2, SSS_3, SSS_4],
        members: '4 Team Members',
        role: 'Team Lead',
        date: '2023',
        details: 'The smart surveillance system is a security system which can be used in various locations to identify intruders that may enter the user\'s property. It uses a combination of software and hardware aspects in order to capture images and video in order to analyze faces in real time. The software component is a web app that consists of a web application (front end) and a server (back end).\n',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0  lg:col-span-2 relative group'
    },
    {
        id: 2,
        name: 'BOOKLUB (Online Forum)',
        image: booklub,
        tags: ['Forum', 'Fullstack', 'Web-app', 'Chatting feature', 'CRUD', 'Websockets'],
        skills: ['Python', 'Django', 'JavaScript','HTML', 'CSS', 'Bootstrap', ],
        features: [
            {title: 'Secure Authentication', description: 'User\'s can create their own account and login to authenticate themselves on the forum'}, 
            {title: 'CRUD', description: 'Full CRUD functionality where user\'s cam create, edit, and delete discussion posts and chatting rooms'}, 
            {title: 'Chatting', description: 'Fully functional, asynchronous chatting feature created using websockets. User\'s all around the world can communicate with eachother'},
            ],
        videoUrl: '',
        githubUrl: 'https://github.com/Atiqul-Isla/book-club',
        detailedImage: dottir,
        detailedImage_2: maplebarber,
        members: 'Solo',
        role: 'Team Lead',
        date: '2022',
        details: 'A social media app in which different users all over the world can discuss certain topics or ideas about books. Made using Django Models and the built in db.sqlite database, a table was created to hold data for each indivudal user, each chat-room any specific user creates and each book any specific user has read',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 3,
        name: 'Nivaly (Online Marketing Agency)',
        image: nivaly_1,
        tags: ['frontend', 'Landing Page', 'Agency Site'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        features: [
            {title: 'Full Deployment', description: 'Site has been fully deployed with CI/CD functionality'}, 
            {title: 'Functional Contact', description: 'Created using email.js'}, 
            {title: 'Easy to Navigate', description: 'Simple layout'},
            ],
        videoUrl: 'nivaly.ca',
        githubUrl: 'https://github.com/Atiqul-Isla/Agency-Site',
        detailedImage: nivaly_2,
        detailedImage_2: nivaly_3,
        members: 'Solo',
        role: 'Team Lead',
        date: '2022',
        details: 'An online creative marketing agency that helps businesses improve their copywriting, social media and email marketing. Made using React.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 4,
        name: 'Image Demosaic Algorithm',
        image: demosaic_1,
        tags: ['Machine Learning', 'Linear Regression', 'Image Processing'],
        skills: ['Matlab', 'Python'],
        features: [
            {title: 'Better Performance', description: 'This Demosaicing Algorithm has better performance than Matlab\'s built in function.'}, 
            {title: 'Greyscale Friendly', description: 'Can demosaic and RGB image or a raw greyscale image.'}, 
            {title: 'Robust', description: 'Can use any natural training image with limited effect on performance.'},
            ],
        videoUrl: 'https://youtu.be/MtOQFfF6NkQ',
        githubUrl: '',
        detailedImage: demosaic_2,
        demosaic_2: demosaic_3,
        members: 'Solo',
        role: 'Team Lead',
        date: '2023',
        details: 'Implemented a Linear Regression Algorithm to demosaic an image. This was done by Simulating the 4 types of mosaic patches from full color patches and solving the linear least square problem for each case to find the 8 coefficient matrices. Each pixel\'s missing RGB values were predicted using the coefficient matrices.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 5,
        name: 'Stock Chart API - RapiDAPI',
        image: api02,
        tags: ['API', 'frontend', 'Web-app', 'Chatting feature', 'CRUD', 'Websocket'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        detailedImage: dottir,
        moreImage: maplebarber,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 6,
        name: 'Sorting Algorithm Visualizer',
        image: sorting,
        tags: ['API', 'frontend', 'Web-app', 'Chatting feature', 'CRUD', 'Websocket'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        detailedImage: dottir,
        moreImage: maplebarber,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 7,
        name: 'Maple Barber - Ecommerce Website',
        image: maplebarber,
        tags: ['API', 'frontend', 'Web-app', 'Chatting feature', 'CRUD', 'Websocket'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        detailedImage: dottir,
        moreImage: maplebarber,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-2 relative group'
    },
]

export default projects