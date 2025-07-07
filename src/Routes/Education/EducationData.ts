type EducationData = {
  date: string;
  title: string;
  institution: string;
  description: string;
  image?: string;
  link?: string;
};

export const educationData: EducationData[] = [
  {
    date: "2022-10",
    institution: "Nexer Academy",
    title: "Leading SAFe 5.1",
    description: "Internal course at Nexer Group.",
    image: "./assets/images/education/nexer.png",
    link: "https://www.nexergroup.com",
  },
  {
    date: "2022-07",
    institution: "Scrum.org",
    title: "Scrum Master Certification",
    description:
      "After completing the assessment, I earned the PSM1 certification.",
    image: "./assets/images/education/psm1.png",
    link: "https://www.scrum.org/user/1074033",
  },
  {
    date: "2022-06",
    institution: "Nexer Academy",
    title: "Basic Scrum and Agile",
    description: "Internal course at Nexer Group.",
    image: "./assets/images/education/nexer.png",
    link: "https://www.nexergroup.com",
  },
  {
    date: "2014-09 - 2017-06",
    institution: "Mid Sweden University",
    title: "Informatics with Focus on System Development, 180 Credits",
    description:
      "Education in informatics and system science. After two years of completed studies and a practical degree project, I earned my first university degree. I then completed a third year consisting of selected courses and a theoretical degree project to obtain a bachelor's degree.",
    image: "./assets/images/education/miun.png",
    link: "https://www.miun.se",
  },
  {
    date: "2014-03 - 2014-06",
    institution: "Mid Sweden University",
    title: "Courses in Informatics",
    description:
      "A-level courses in informatics. User centered System development 7.5 credits, Search and evaluate information on the Web 7.5 credits, Web Informatics 7.5 credits.",
    image: "./assets/images/education/miun.png",
    link: "https://www.miun.se",
  },
  {
    date: "2013-04 - 2013-06",
    institution: "NTI School",
    title: "English 6",
    description: "2013-05 English 6.",
    image: "./assets/images/education/lundskommun.webp",
    link: "https://ntigymnasiet.se/lund/",
  },
  {
    date: "2009-03 - 2009-05",
    institution: "NTI School",
    title: "Mathematics B",
    description: "2009-05 Mathematics B.",
    image: "./assets/images/education/lundskommun.webp",
    link: "https://ntigymnasiet.se/lund/",
  },
  {
    date: "2000-08 - 2003-06",
    institution: "Vipeholmsskolan",
    title: "Electrical Program",
    description:
      "Upper secondary education, electrical program with specialization in installation.",
    image: "./assets/images/education/lundskommun.webp",
    link: "https://lund.se/gymnasiewebbar/vipan",
  },
];
