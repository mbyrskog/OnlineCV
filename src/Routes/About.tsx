import { Box, Divider, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box>
      <Typography variant="h4">About me</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography gutterBottom>
        Hello and welcome to my online CV. My name is Michael, and I'm a
        software developer with experience in building scalable and practical
        applications using technologies like React, .NET, and cloud-based
        services. I have experience working both in frontend and backend, often
        in close collaboration with teams and stakeholders. I've also been
        involved in supporting development processes through Scrum practices and
        cross-functional teamwork.
        <br />
        <br />
        Before transitioning into tech, I worked with electrical installations
        on construction sites - a role that taught me the importance of
        structure, precision, and efficiency. These values still influence how I
        approach software development and problem-solving today. Feel free to
        explore the site to learn more about my skills, background, and
        projects.
      </Typography>
    </Box>
  );
};
