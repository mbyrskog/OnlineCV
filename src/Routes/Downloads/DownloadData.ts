type FileData = {
  title: string;
  url: string;
};

type LinkData = {
  title: string;
  description: string;
  url?: string;
  titleTwo?: string;
  urlTwo?: string;
};

export const fileData: FileData[] = [
  { title: "Scrum Master Certification (PSM1)", url: "../assets/psm1.pdf" },
  {
    title: "Best candidate's thesis 2017 award",
    url: "../assets/thesis_award.pdf",
  },
];

export const linkData: LinkData[] = [
  {
    title: "Bachelor's degree thesis",
    description:
      "Bachelor's degree thesis 2017 in informatics, Mid Sweden University.",
    url: "https://miun.diva-portal.org/smash/record.jsf?pid=diva2%3A1135142&dswid=-3614",
  },
  {
    title: "Car Store",
    description:
      "Console application i made in C#, simulating a car store with different options for listing the cars.",
    titleTwo: "GitHub repository",
    urlTwo: "https://github.com/mbyrskog/CarStore",
  },
  {
    title: "TV Show Advisor",
    description:
      "An app for searching and listing recommendations for TV shows. Using React, TypeScript and themoviedb.org's API.",
    url: "https://tv-show-advisor-gamma.vercel.app/",
    titleTwo: "GitHub repository",
    urlTwo: "https://github.com/mbyrskog/Tv-show-advisor",
  },
  {
    title: "MB Hotels",
    description:
      "An app simulating a form for booking a room. Using Angular and TypeScript.",
    url: "https://hotel-app-eight-plum.vercel.app/",
    titleTwo: "GitHub Repository",
    urlTwo: "https://github.com/mbyrskog/HotelApp",
  },
  {
    title: "Online CV",
    description:
      "This app, using React, TypeScript and Material UI for responsiveness and theme colors.",
    url: "https://onlinecv-sigma-flame-72.vercel.app/",
    titleTwo: "GitHub Repository",
    urlTwo: "https://github.com/mbyrskog/onlinecv",
  },
];
