import { Box, Divider, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box>
      <Typography variant="h4">About me</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography gutterBottom>
        Welcome to my personal portfolio! I'm Michael Byrskog, a software
        developer with a strong focus on building efficient and scalable
        applications. My journey in tech has been driven by problem solving and
        a passion for creating practical solutions. Over the years, I've worked
        with technologies like React, .NET, and cloud based services,
        contributing to both frontend and backend development. Beyond coding, I
        have experience facilitating Scrum events and collaborating with teams
        to ensure smooth development processes. I enjoy working in environments
        where I can bridge the gap between developers and stakeholders, helping
        to align technical solutions with business needs. Before transitioning
        into software development, I worked with electrical installations in
        construction sites, often under a piecework system. This experience
        taught me the value of teamwork, precision, and efficiency, skills that
        still influence my approach to problem solving and structured work
        today. Feel free to explore my portfolio to see the projects I've worked
        on and the skills I've developed throughout my career.
      </Typography>
    </Box>
  );
};
