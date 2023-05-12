import nivaly from '../public/assets/projects/nivaly.jpg'
import booklub from '../public/assets/projects/booklub.jpg'
import SSS from '../public/assets/projects/SSS.jpg'
import demosaic from '../public/assets/projects/demosaic.jpg'
import chat from '../public/assets/projects/chat.jpg'
import maplebarber from '../public/assets/projects/maplebarber.jpg'

import SSS_1 from '../public/assets/projects/slideshow/SSS_1.jpg'
import SSS_2 from '../public/assets/projects/slideshow/SSS_2.jpg'
import SSS_3 from '../public/assets/projects/slideshow/SSS_3.jpg'
import SSS_4 from '../public/assets/projects/slideshow/SSS_4.jpg'
import SSS_5 from '../public/assets/projects/slideshow/SSS_5.jpg'
import SSS_6 from '../public/assets/projects/slideshow/SSS_6.jpg'
import SSS_7 from '../public/assets/projects/slideshow/SSS_7.jpg'
import SSS_8 from '../public/assets/projects/slideshow/SSS_8.jpg'
import SSS_9 from '../public/assets/projects/slideshow/SSS_9.jpg'
import SSS_10 from '../public/assets/projects/slideshow/SSS_10.jpg'

import nivaly_1 from '../public/assets/projects/slideshow/nivaly_1.jpg'
import nivaly_2 from '../public/assets/projects/slideshow/nivaly_2.jpg'
import nivaly_3 from '../public/assets/projects/slideshow/nivaly_3.jpg'

import demosaic_1 from '../public/assets/projects/slideshow/demosaic_1.jpg'
import demosaic_2 from '../public/assets/projects/slideshow/demosaic_2.jpg'
import demosaic_3 from '../public/assets/projects/slideshow/demosaic_3.jpg'
import demosaic_4 from '../public/assets/projects/slideshow/demosaic_4.jpg'


import pace_1 from '../public/assets/projects/slideshow/pace_1.jpg'
import pace_2 from '../public/assets/projects/slideshow/pace_2.jpg'
import pace_3 from '../public/assets/projects/slideshow/pace_3.jpg'
import pace_4 from '../public/assets/projects/slideshow/pace_4.jpg'
import pace_5 from '../public/assets/projects/slideshow/pace_5.jpg'
import pace_6 from '../public/assets/projects/slideshow/pace_6.jpg'
import pace_7 from '../public/assets/projects/slideshow/pace_7.jpg'


import chat_1 from '../public/assets/projects/slideshow/chat_1.jpg'
import chat_2 from '../public/assets/projects/slideshow/chat_2.jpg'
import chat_3 from '../public/assets/projects/slideshow/chat_3.jpg'
import chat_4 from '../public/assets/projects/slideshow/chat_4.jpg'
import chat_5 from '../public/assets/projects/slideshow/chat_5.jpg'

import book_1 from '../public/assets/projects/slideshow/book_1.jpg'
import book_2 from '../public/assets/projects/slideshow/book_2.jpg'
import book_3 from '../public/assets/projects/slideshow/book_3.jpg'
import book_4 from '../public/assets/projects/slideshow/book_4.jpg'
import book_5 from '../public/assets/projects/slideshow/book_5.jpg'
import book_6 from '../public/assets/projects/slideshow/book_6.jpg'
import book_7 from '../public/assets/projects/slideshow/book_7.jpg'
import book_8 from '../public/assets/projects/slideshow/book_8.jpg'
import book_9 from '../public/assets/projects/slideshow/book_9.jpg'
import book_10 from '../public/assets/projects/slideshow/book_10.jpg'


import shop_1 from '../public/assets/projects/slideshow/shop_1.jpg'
import shop_2 from '../public/assets/projects/slideshow/shop_2.jpg'
import shop_3 from '../public/assets/projects/slideshow/shop_3.jpg'
import shop_4 from '../public/assets/projects/slideshow/shop_4.jpg'
// import shop_5 from '../public/assets/projects/slideshow/shop_5.jpg'
import shop_6 from '../public/assets/projects/slideshow/shop_6.jpg'
import shop_7 from '../public/assets/projects/slideshow/shop_7.jpg'
import shop_8 from '../public/assets/projects/slideshow/shop_8.jpg'
import shop_9 from '../public/assets/projects/slideshow/shop_9.jpg'



// Add teamm members, personal role, date, more images, featurees

const projects = [
    {
        id: 1,
        name: 'Smart Security System',
        image: SSS,
        tags: ['Machine Learning', 'Algorithms', 'LBPH', 'Facial Recognition', 'Webapp', 'Embedded Systems', 'Image Processing', 'SSH'],
        skills: ['Python', 'Flask', 'OpenCV', 'Numpy', 'HTML', 'CSS', 'Putty', 'RPI 4B' ],
        features: [
        {title: 'Alerting System', description: 'A real time, fully functional and customizable alerting system that warns the user when a known or unknown face is detected.'}, 
        {title: 'Versatility', description: 'Full control over SSH connection to the servo motors to move the cameras manually.'}, 
        {title: 'Model Training', description: 'Capture images at anytime and then train the model so that the new face is recognizable. This ensures that the user is able to add, update, delete faces at anytime.'},
        ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        githubUrl: 'https://github.com/Atiqul-Isla/smart-video-system',
        slideImages: [SSS_1, SSS_2, SSS_3, SSS_4, SSS_5, SSS_6, SSS_7, SSS_8, SSS_9, SSS_10],
        members: '4 Team Members',
        role: 'Team Lead',
        date: '2023',
        details: 'The smart surveillance system is a security system app which can be used in various locations to identify intruders that may enter the user\'s property. It uses a combination of software and hardware technologies in order to capture images and videos which are then used to analyze faces in real time. The software component is a web app that consists of a web application (frontend) and a server (backend).\n',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0  lg:col-span-2 relative group'
    },
    {
        id: 2,
        name: 'BOOKLUB (Online Forum)',
        image: booklub,
        tags: ['Forum', 'Fullstack', 'Web-app', 'Chatting feature', 'CRUD', 'Websockets'],
        skills: ['Python', 'Django', 'JavaScript','HTML', 'CSS', 'Bootstrap', ],
        features: [
            {title: 'Secure Authentication', description: 'User\'s can create their own account and login to authenticate themselves on the forum.'}, 
            {title: 'CRUD', description: 'Full CRUD functionality where users can create, read, update, and delete discussion posts and chatting rooms.'}, 
            {title: 'Chatting', description: 'Fully functional, asynchronous chatting feature created using websockets. Users all around the world can communicate with eachother.'},
            ],
        githubUrl: 'https://github.com/Atiqul-Isla/book-club',
        slideImages: [book_1, book_2, book_3, book_4,book_5, book_6, book_7, book_8, book_9, book_10,],
        members: 'Solo',
        role: 'Software Engineer',
        date: '2022',
        details: 'A social media app in which different users all over the world can discuss certain topics or ideas about books. Using Django Models and the built in db.sqlite database, a table was created to hold data for each indivudal user, each chat-room any specific user creates and each book any specific user has read.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 3,
        name: 'Nivaly (Online Marketing Agency)',
        image: nivaly_1,
        tags: ['frontend', 'Landing Page', 'Agency Site'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        features: [
            {title: 'Full Deployment', description: 'Site has been fully deployed with CI/CD functionality.'}, 
            {title: 'Functional Contact', description: 'Fully functioning contact form which allows customers to contact the agency directly through the website.'}, 
            {title: 'Easy to Navigate', description: 'Simple layout and easy to traverse layout.'},
            ],
        videoUrl: 'https://nivaly.ca/',
        githubUrl: 'https://github.com/Atiqul-Isla/Agency-Site',
        slideImages: [nivaly_1, nivaly_2, nivaly_3],
        members: 'Solo',
        role: 'Software Engineer',
        date: '2022',
        details: 'An online creative marketing agency that helps businesses improve their copywriting, social media and email marketing. Made using React.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 4,
        name: 'Image Demosaic Algorithm',
        image: demosaic,
        tags: ['Machine Learning', 'Linear Regression', 'Image Processing'],
        skills: ['Matlab', 'Python'],
        features: [
            {title: 'Better Performance', description: 'This Demosaicing Algorithm has better performance than Matlab\'s built in function.'}, 
            {title: 'Greyscale Friendly', description: 'Can demosaic any RGB image or any raw greyscale image.'}, 
            {title: 'Robust', description: 'Can use any natural training image with limited effect on performance; That is to say, the algorithm always surpasses the built in function regardless of the training image or the inputted image.'},
            ],
        videoUrl: 'https://youtu.be/MtOQFfF6NkQ',
        slideImages: [demosaic_1, demosaic_4, demosaic_2, demosaic_3,],
        members: 'Solo',
        role: 'Software Engineer',
        date: '2023',
        details: 'Implemented a Linear Regression Algorithm to demosaic any inputted image. This was done by simulating 4 different types of mosaic patches from a full color training image and solving a general linear least square problem for each case to find 8 different coefficient matrices. Each pixel\'s missing RGB values were predicted by taking the dot product of the coefficient matrices and each pixel\'s neighbouring pixels.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 5,
        name: 'Pacemaker Monitor',
        image: pace_1,
        tags: ['GUI', 'Embedded Systems', 'IoT', 'Real Time Data', 'Systems Design'],
        skills: ['Python', 'Kivy', 'Matlab', 'Simulink',],
        features: [
            {title: 'Full Authentication', description: 'Users are able to register and login in to keep data secure.'}, 
            {title: 'Real Time Display', description: 'Real time data comes in from the pacemaker which is then displayed onto the GUI in the form of a graph.'}, 
            {title: 'Fully Customizable', description: 'Users can alter and change the settings of the pacemaker anyway they see fit.'},
            ],
        githubUrl: 'https://github.com/Atiqul-Isla/PacemakerApp',
        slideImages: [pace_7, pace_2, pace_3, pace_4, pace_5, pace_6, pace_1],
        members: '4 Team Members',
        role: 'GUI Engineer',
        date: '2020',
        details: 'Pacemaker App monitoring GUI created with Python 3.6 and Kivy. The app tracks a given Pacemaker for consistancy and alerts user\'s when things are not well.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
    {
        id: 6,
        name: 'Chat Application',
        image: chat,
        tags: ['Network', 'TCP', 'UDP', 'Chatting feature', 'threads', 'sockets', 'Secure',],
        skills: ['Python',],
        features: [
            {title: 'Multicast', description: 'Multiple users are able to join a chatroom without the TCP/UDP connection getting blocked.'}, 
            {title: 'Customizable', description: 'Users are able to create and delete chatrooms on whichever address and/or port they choose.'}, 
            {title: 'Threads', description: 'Connection is quick and efficient due to the use of threads.'},
            ],
        slideImages: [chat_1, chat_2, chat_3, chat_4, chat_5],
        members: '3 Team Members',
        role: 'Network Engineer',
        date: '2023',
        details: 'A fully functional chatting app that utilizes multicasting in Python (With threads) to create a chatting app where a large number of clients can join. The app was created using the Berkley Sockets module in Python.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-2 relative group'
    },
    {
        id: 7,
        name: 'Ecommerce Site',
        image: maplebarber,
        tags: ['Fullstack', 'Web-app', 'Ecommerce', 'CRUD', 'Ratings'],
        skills: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', ],
        features: [
            {title: 'Rating System', description: 'Customers are able to comment on and rate products.'}, 
            ],
        githubUrl: 'https://github.com/Atiqul-Isla/Ecommerce-Site',
        slideImages: [shop_1, shop_2, shop_3, shop_4, shop_6, shop_7, shop_8, shop_9],
        members: 'Solo',
        role: 'Software Engineer',
        date: '2020',
        details: 'A fully functional ecommerce site for barbershop products. Made using Django and Python.',
        class: 'rounded-lg shadow-lg shadow-black min-h-[30vh] cursor-pointer flex-shrink-0 lg:col-span-1 relative group'
    },
]

export default projects