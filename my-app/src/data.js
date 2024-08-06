import { registerToVote, planningEvent, volunteerTraining, Shelley, Nawal, Taras, Avi, Brynja, Markus, Ankita, Maitreya } from "./images";



const Testimonials = [
    {
        name: 'Shelley Guo',
        role: 'Registered to Vote',
        image: Shelley,
        testimonial: 'TYVP provided valuable assistance to me in preregistering to vote and helped educate me on the voting process.'
    },
    {
        name: 'Nawal Arafa',
        role: 'Blaine Ambassador',
        image: Nawal,
        testimonial: 'TYVP has been an amazing guide and support in helping my school kickstart into Voter Registration Day.'
    },
    {
        name: 'Scott Lasota',
        role: 'WHS Student Council',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
        testimonial: 'TYVP has been phenomonal in spreading awareness on youth voting and democracy!'
    }
]


const TeamMembers = [
    {
        name: "Markus Wessman",
        title: "Executive Director",
        imageLink: Markus,
        linkedinLink: "https://www.linkedin.com/in/markus-wessman-7085b52b5/"
    },
    {
        name: "Taras Sarazhynskyy",
        // TARAS SARAZHYNSKYY
        title: "Finance Director",
        imageLink: Taras,
        linkedinLink: "https://www.linkedin.com/in/taras-sarazhynskyy-235760228/"
    },
    {
        name: "Brynja Lockman",
        title: "Outreach Director",
        imageLink: Brynja,
        linkedinLink: "https://www.linkedin.com/in/brynja-lockman-1bb492267/"
    },
    {
        name: "Ankita Kumar",
        title: "Resources Director",
        imageLink: Ankita,
        linkedinLink: "https://www.linkedin.com/in/ankita-kumar-1a1777281/"
    },
    {
        name: "Maitreya Reeder",
        title: "Public Relations Director",
        imageLink: Maitreya,
        linkedinLink: "https://www.linkedin.com/in/maitreya-reeder-62665031a"
    },

    {
        name: "Avi Bandi",
        title: "Technology Director",
        imageLink: Avi,
        linkedinLink: "https://www.linkedin.com/in/avi-bandi-397279227/"
    },


];

const Resources = [

    {
        name: "Registration Presentation",
        description: "Why you should register to vote!",
        image: registerToVote,
        link: "https://docs.google.com/presentation/d/1WkCujlPuMISAr0uIQvMx_DSZjFluCVzczNXkH_8NZR8/copy"
    },

    {
        name: "Planning your Event",
        description: "Walking you through a successful event!",
        image: planningEvent,
        link: "https://docs.google.com/document/d/1womjpl6-JKTIG_ZRPHP0HvMjHW87bRoJe9Vg8Gfux-g/copy"
    },

    {
        name: "Volunteer Training",
        description: "Volunteer Training Resources!",
        image: volunteerTraining,
        link: "https://drive.google.com/file/d/1-4MpwxHCQm5mwPZAJliy_HDKK8TmuasE/view?usp=drive_link "
    },

]


export { Testimonials, TeamMembers, Resources }