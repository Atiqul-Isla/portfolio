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
        detailedImage: SSS_1,
        detailedImage_2: SSS_2,
        details: 'The smart surveillance system is a security system which can be used in various locations to identify intruders that may enter the user\'s property. It uses a combination of software and hardware aspects in order to capture images and video in order to analyze faces in real time. The software component is a web app that consists of a web application (front end) and a server (back end).\n',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0  lg:col-span-2 relative group'
    },
    {
        id: 2,
        name: 'BOOKLUB - Book Discussion Forum',
        image: booklub,
        tags: ['Forum', 'Fullstack', 'Web-app', 'Chatting feature', 'CRUD', 'Websocket'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        detailedImage: dottir,
        moreImage: maplebarber,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 3,
        name: 'Spacestagram - NASA image displayer',
        image: spacestagram,
        tags: ['API', 'frontend', 'Web-app', 'Chatting feature', 'CRUD', 'Websocket'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        detailedImage: dottir,
        moreImage: maplebarber,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 4,
        name: 'Social Media Marketing API',
        image: api01,
        tags: ['API', 'frontend', 'Web-app', 'Chatting feature', 'CRUD', 'Websocket'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        detailedImage: dottir,
        moreImage: maplebarber,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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