import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { useState } from "react";
import { fileData } from "./DownloadData";
import { linkData } from "./DownloadData";

export const Downloads = () => {
  const [activeFile, setActiveFile] = useState<string | null>(null);

  const toggleViewer = (url: string) => {
    setActiveFile(activeFile === url ? null : url);
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Typography variant="h4">Downloads and links</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography gutterBottom>
        Here you will find all my downloadable content, and some useful links.
      </Typography>
      {fileData.map(({ title, url }) => (
        <Box key={url} sx={{ marginBottom: 3 }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Button
            variant="contained"
            sx={{ marginRight: 1 }}
            onClick={() => toggleViewer(url)}
          >
            {activeFile === url ? "Hide" : "View"}
          </Button>
          <Button variant="contained" onClick={() => handleDownload(url)}>
            Download
          </Button>
          {activeFile === url && (
            <Box
              sx={{
                position: "relative",
                paddingTop: "56.25%",
                overflow: "hidden",
                marginTop: 2,
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <iframe
                src={url}
                title="File Viewer"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </Box>
          )}
        </Box>
      ))}
      <Typography variant="h5" gutterBottom>
        Links
      </Typography>

      {linkData.map(({ title, description, url, titleTwo, urlTwo }) => (
        <Box
          gap={1}
          key={title}
          sx={{
            marginBottom: 3,
          }}
        >
          {url ? (
            <Link
              variant="h6"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          ) : (
            <Typography variant="h6" color="text.secondary">
              {title}
            </Typography>
          )}

          <Typography>{description}</Typography>
          {titleTwo && urlTwo ? (
            <Link href={urlTwo} target="_blank" rel="noopener noreferrer">
              {titleTwo}
            </Link>
          ) : (
            ""
          )}
          <Divider></Divider>
        </Box>
      ))}
    </Box>
  );
};
