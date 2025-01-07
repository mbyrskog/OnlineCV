import { Box, Divider, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">About me</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography>
        Welcome to my personal portfolio! I'm Michael Byrskog, a passionate
        professional with a solid foundation in software development and a drive
        for leadership. My journey began as a software developer, where I honed
        my skills in building efficient and scalable applications while
        mastering various programming languages and technologies. Over time,
        I've expanded my focus to include agile methodologies, embracing roles
        that allow me to lead teams and deliver value-driven solutions. With a
        deep understanding of both the technical and strategic aspects of
        development, I excel at bridging the gap between stakeholders and
        developers, ensuring seamless communication and successful outcomes. My
        background as a developer equips me with a unique perspective, enabling
        me to anticipate challenges, guide teams effectively, and foster
        collaboration. Explore my portfolio to discover the projects I've worked
        on and the skills I've refined throughout my career.
      </Typography>
    </Box>
  );
};

export default About;
