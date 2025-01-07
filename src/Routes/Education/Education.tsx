import React from "react";
import { Box, Typography, Divider, Grid2 } from "@mui/material";
import { educationData } from "./EducationData";

const Education: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">Education and certifications</Typography>
      <Divider sx={{ marginY: 2 }} />
      {educationData.map((edu, index) => (
        <Box key={index} marginBottom={2}>
          <Grid2 container>
            <Grid2 size={10}>
              <Typography variant="h5">
                {edu.institution ? edu.institution : ""}
              </Typography>
              <Typography variant="h6">
                {edu.title ? edu.title + " • " + edu.date : edu.date}
              </Typography>
              <Typography whiteSpace="pre-line">{edu.description}</Typography>
            </Grid2>
            <Grid2 size={2} sx={{ textAlign: "right" }}>
              {edu.image && (
                <a
                  href={edu.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={edu.image}
                    alt={`${edu.institution} logo`}
                    style={{
                      maxWidth: "90px",
                      maxHeight: "50px",
                    }}
                  />
                </a>
              )}
            </Grid2>
          </Grid2>
        </Box>
      ))}
    </Box>
  );
};

export default Education;
