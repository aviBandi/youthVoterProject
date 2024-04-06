import { registerToVote, planningEvent, volunteerTraining } from "./images";



const Testimonials = [
    {
        name: 'Scoootty Giengier',
        role: 'WHS person',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg',
        testimonial: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
    },
    {
        name: 'Avinash Bandi',
        role: 'Software Engineer',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg',
        testimonial: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
    },
    {
        name: 'Markus Wessman',
        role: 'Future POTUS',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
        testimonial: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
    }
]


const TeamMembers = [
    {
        name: "Markus Wessman",
        title: "Executive Director",
        imageLink: "https://media.licdn.com/dms/image/D4D03AQE0y5deMMrxww/profile-displayphoto-shrink_800_800/0/1709094256112?e=1717632000&v=beta&t=sGM0xXhBrwABhnoWIQd7qiNG0DQj9WTN9KfE15cv2iw",
        linkedinLink: "https://www.linkedin.com/in/markus-wessman-7085b52b5/"
    },
    {
        name: "Taras Sarazhyznskyy",
        title: "Finance Director",
        imageLink: "https://media.licdn.com/dms/image/D5603AQGtnouqPxRqFQ/profile-displayphoto-shrink_800_800/0/1680888559851?e=1717632000&v=beta&t=gQY6dTnjFGsjio7Qb395OdzbnO20ui4rf01d1hTpCx0",
        linkedinLink: "https://www.linkedin.com/in/taras-sarazhynskyy-235760228/"
    },
    {
        name: "Brynja Lockman",
        title: "Outreach Director",
        imageLink: "https://media.licdn.com/dms/image/D5603AQGTCuo56yEJIA/profile-displayphoto-shrink_800_800/0/1699569454730?e=1717632000&v=beta&t=uVCH6lrsmZP90erJNy6zY9JmDBeobmrCT6D99X5j3Fk",
        linkedinLink: "https://www.linkedin.com/in/brynja-lockman-1bb492267/"
    },

    {
        name: "Avi Bandi",
        title: "Technology Director",
        imageLink: "https://media.licdn.com/dms/image/D5603AQHTDaqyaUT3PA/profile-displayphoto-shrink_200_200/0/1689619678004?e=1717632000&v=beta&t=EkNxTmTH4uvlSHP7s1iR_1pL42fIrgGfMCNw01SJCF0",
        linkedinLink: "https://www.linkedin.com/in/avi-bandi-397279227/"
    },
    {
        name: "Souri Ahmed",
        title: "Public Relations Director",
        imageLink: "https://media.licdn.com/dms/image/D4D03AQGOZdYBBOew7w/profile-displayphoto-shrink_200_200/0/1712285845006?e=2147483647&v=beta&t=gEmU0Hkazd_5ASiIs5qFpnQCBvDsthl5XbOewUFRh64",
        linkedinLink: "https://www.linkedin.com/in/souri-ahmed-386771302/"
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
        description: "Everything needed for an successful event!",
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