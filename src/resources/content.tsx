import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Fabiana",
  lastName: "Barbati",
  name: `Fabiana Barbati`,
  role: "Web developer",
  avatar: "/images/projects/project-01/AVATARCHATGPT.png",
  email: "fabianbarbaticbd@gmail.com",
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};


const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fabianacbd",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fabiana-barbati-4aaa7a243/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>My portfolio</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Fabiana Barbati, a multiplataform developer student at <Text as="span" size="xl" weight="strong">The Power MBA</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Fabiana is a Venezuelan girl who has been living in Madrid for three years. She's a student of Multiplatform Application Development and has a master's degree in Web Application Development. She's passionate about frontend development and designing websites and apps.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "The Power MBA",
        timeframe: "2025",
        role: "Intern Developer",
        achievements: [
          <>
            Practice and execution of applications with Python.
          </>,
          <>
            Video translations with Artificial Intelligence
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Carabobo - Venezuela",
        description: <>2014 - 2019. Laws, university degree completed.</>,
      },
      {
        name: "The Power MBA",
        description: <>Higher grade: Multiplatform Application Development.</>,
      },
  {     name: "The Power MBA",
        description: <>Master: Web Application Development.</>,
        },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Figma-Logo-700x300.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
  {
          title: "Databases",
          description: (
            <>I can work with databases such as MongoDB, MySQL, and PostgreSQL.</>
          ),
          tags: [
            {
              name: "Figma",
              icon: "figma",
            },
          ],
          // optional: leave the array empty if you don't want to display images
          images: [
            {
              src: "/images/projects/project-01/MongoDB-Logo-500x313.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
      {
        title: "Programming languages",
        description: (
          <>Capable of building complete projects with these languages.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "CSS",
          },
          {
            name: "HTML",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/logos.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};


const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  images: [
            {
              src: "/images/projects/project-01/AVATARCHATGPT.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/image0.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
