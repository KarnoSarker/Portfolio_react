/* eslint-disable import/no-anonymous-default-export */
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import LanguageIcon from '@mui/icons-material/Language';

export default {
    name: 'Karno Sarker',
    title: 'Front - End Developer',

    birthday: '01th January 1998',
    email: 'karnoaiub@gmail.com',
    address: 'Vettersstraße 54 09126, Chemnitz, Germany',
    phone: '+49 1575 8076244',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/karno.sarker',
            text: 'Facebook',
            icon: <FacebookIcon/>
        },
        Twitter: {
            link: 'https://www.facebook.com',
            text: 'Twitter',
            icon: <TwitterIcon/>
        },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/karnosarker',
            text: 'LinkedIn',
            icon: <LinkedInIcon/>
        },
        GitHub: {
            link: 'https://www.github.com/karnosarker',
            text: 'GitHub',
            icon: <GitHubIcon/>
        }
    },
    about: 'I am an experienced programmer who can find creative solutions to technical challenges, whilst at the same time designing a sleek and visually appealing websites. I have extensive knowledge of recognized technical standards and familiar with modern build practices. I am knowledgeable in OOP, JavaScript, HTML5, CSS3 and SQL. I am also proficient in ReactJS, NextJS and Redux.',

    experiences: [
        {
            title: 'TEACHING ASSISTANT',
            date: 'Summer 2018-2019',
            description: 'Teaching assistant in Computer Science Department at American International University - Bangladesh.',
        },
        {
            title: 'GRAPHIC DESIGNER',
            date: '2018-2019',
            description: 'Professional Freelancer at fiverr.com',
        },
        

    ],

    education: [
        {
            title: 'TECHNISCHE UNIVERSITÄT CHEMNITZ',
            date: 'Ongoing',
            description: 'M.Sc. in WEB Engineering Chemnitz, Germany',        },
        {
            title: 'AMERICAN INTERNATIONAL UNIVERSITY - BANGLADESH (AIUB)',
            date: '2015-2019',
            description: 'B.Sc. in Computer Science and Engineering Dhaka, Bangladesh',        },
        

    ],

    services: [
        {
            title: 'Web Dev',
            description: 'Na',
            icon: <WorkOutlinedIcon />
        },
        {
            title: 'Web Dev',
            description: 'Na',
            icon: <WorkOutlinedIcon />
        },
        {
            title: 'Web Dev',
            description: 'Na',
            icon: <WorkOutlinedIcon />
        },
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                'ReactJS',
                'JavaScript',
                'BootStrap',
                'Material UI'
            ],
        },
        {
            title: 'BACK-END',
            description: [
                'NodeJS',
            ],
        },
        {
            title: 'DATABASE',
            description: [
                'MySQL',
                'MongoDB',
            ],
        },
        {
            title: 'SOURCE CONTROL',
            description: [
                'GitHub',
                
            ],
        },
    ],

    projects: [
        {
            tag: 'React',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fpastel-background&psig=AOvVaw1CHvDd68ET_7r0HYRHwZ9x&ust=1650065957982000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDpjfHclPcCFQAAAAAdAAAAABAc',
            title: 'TRAVEL ADVISOR',
            caption: 'A short description',
            description: 'Travel Companion Application using React, Material-ui, Google Maps API, Searching for places, Fetching restaurants, hotels and attractions based on location using Rapid APIs, data filtering and much more.',
            link: [
                
                {link: 'https://travel-advisor-karno.netlify.app/', icon: <LanguageIcon />},
                {link: 'https://github.com/KarnoSarker/Travel_Advisor_react', icon: <GitHubIcon />},
                
            ],
        },
        {
            tag: 'React',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fpastel-background&psig=AOvVaw1CHvDd68ET_7r0HYRHwZ9x&ust=1650065957982000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDpjfHclPcCFQAAAAAdAAAAABAc',
            title: 'CRYPTOCURRENCY',
            caption: 'A short description',
            description: 'Cryptocurrency Application, using React, Ant Design, Redux and APIs powered by rapidapi. Fetching Cryptos Data, News, price chart.',
            link: [
                
                {link: 'https://crypto-app-react-karno.netlify.app/', icon: <LanguageIcon />},
                {link: 'https://github.com/KarnoSarker/Crypto_react', icon: <GitHubIcon />},
               
            ],
        },
        {
            tag: 'React',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fpastel-background&psig=AOvVaw1CHvDd68ET_7r0HYRHwZ9x&ust=1650065957982000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDpjfHclPcCFQAAAAAdAAAAABAc',
            title: 'REAL ESTATE',
            caption: 'A short description',
            description: 'Real Estate Application, using React, Next.js, chakra-ui, Axios and APIs powered by rapidapi.',
            link: [
                
                {link: 'https://realestate-react.vercel.app/', icon: <LanguageIcon />},
                {link: 'https://github.com/KarnoSarker/realestate_react', icon: <GitHubIcon />},
                
            ],
        },
        {
            tag: 'React',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fpastel-background&psig=AOvVaw1CHvDd68ET_7r0HYRHwZ9x&ust=1650065957982000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDpjfHclPcCFQAAAAAdAAAAABAc',
            title: 'Grocery List (Local Storage)',
            caption: 'A short description',
            description: '',
            link: [
                
                
                {link: 'https://github.com/KarnoSarker/react_grocery_list_local_storage', icon: <GitHubIcon />},
                
            ],
        },
        {
            tag: 'Flutter',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fpastel-background&psig=AOvVaw1CHvDd68ET_7r0HYRHwZ9x&ust=1650065957982000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDpjfHclPcCFQAAAAAdAAAAABAc',
            title: 'Wallet App',
            caption: 'A short description',
            description: '',
            link: [
                
                
                {link: 'https://github.com/KarnoSarker/my_wallet_app', icon: <GitHubIcon />},
                
            ],
        },
        
        
    ], 

    
};