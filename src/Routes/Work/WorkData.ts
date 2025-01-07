interface WorkData {
  date: string;
  position?: string;
  company: string;
  description?: string;
  image?: string;
  link?: string;
  skills?: string[];
  assignment?: {
    title: string;
    description: string;
    skills?: string[];
  }[];
}

export const workData: WorkData[] = [
  {
    date: "2020-02 - TODAY",
    position: "Consultant",
    company: "Nexer Group",
    assignment: [
      {
        title: "MKB Fastighets AB | February 2024 - Ongoing",
        description:
          "Ongoing development of an app for administrators to manage rental processes for parking spots around Malmö, queues for apartments, and more. Also managing support for previous systems.",
        skills: ["TypeScript", "React", "C#/.NET", "Azure DevOps", "Scrum"],
      },
      {
        title: "HSB Affärsstöd | January 2020 - October 2023",
        description: `Development of new microservices. Examples are a service for storing and sharing files, a service for managing motions, letters, subleases, and creating protocols for board meetings. Also working part-time as a Scrum Master, facilitating Scrum events and handling requirements in collaboration with product owners. Also managed support for these services.`,
        skills: [
          "TypeScript",
          "Angular",
          "C#/.NET",
          "Microservices",
          "Azure DevOps",
          "Scrum",
        ],
      },
    ],
    image: "./assets/images/work/nexer.png",
    link: "https://www.nexergroup.com",
  },
  {
    date: "2018-02 - 2020-02",
    position: "System Developer",
    company: "Skånes Kommuner",
    description:
      "Development and maintenance of web applications. Mostly worked with a service for handling healthcare procurements around Skånes municipalities. Also overseeing support for this service.",
    image: "./assets/images/work/skaneskommuner.jpg",
    link: "https://www.skaneskommuner.se",
    skills: ["Angular", "C#/.NET", "PHP"],
  },
  {
    date: "2012-06 - 2012-12",
    position: "Electrician",
    company: "APQ EL",
    description: "Construction of office buildings in Lund.",
    image: "./assets/images/work/apqel.jpg",
    link: "https://www.apqel.se",
  },
  {
    date: "2012-01 - 2012-06",
    position: "Electrician",
    company: "Hamilton People",
    description: "Construction of office buildings in Oslo, Norway.",
  },
  {
    date: "2009-01 - 2011-12",
    company: "Stay Abroad",
    description:
      "Extra jobs and occasional courses for university eligibility (Mathematics B).",
  },
  {
    date: "2004-12 - 2008-12",
    position: "Electrician",
    company: "Bravida Prenad",
    description:
      "Construction, rebuilding of offices, houses, hospitals, industries in Lund and Malmö.",
    image: "./assets/images/work/bravida.webp",
    link: "https://www.bravida.se",
  },
  {
    date: "2004-06 - 2004-12",
    position: "Electrician",
    company: "Veberöds Elektriska",
    description:
      "Construction and renovation of apartments and houses in Lund.",
  },
];
