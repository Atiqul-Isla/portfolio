import nivaly from '../public/assets/projects/nivaly.jpg'
import booklub from '../public/assets/projects/booklub.jpg'
import spacestagram from '../public/assets/projects/spacestagram.jpg'
import api01 from '../public/assets/projects/api-01.jpg'
import api02 from '../public/assets/projects/api-02.jpg'
import sorting from '../public/assets/projects/sorting.jpg'
import maplebarber from '../public/assets/projects/maplebarber.jpg'
import dottir from '../public/assets/projects/slideshow/dottir.jpg'

// Add teamm members, personal role, date, more images, featurees

const projects = [
    {
        id: 1,
        name: 'Nivaly Creative Agency - landing Page',
        image: nivaly,
        tags: ['Landing Page', 'Frontend', 'Web-app', 'Marketing Agency'],
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', ],
        videoUrl: 'https://youtu.be/xuP01r3o_gA',
        detailedImage: dottir,
        moreImage: maplebarber,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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