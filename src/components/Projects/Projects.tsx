import { Grid } from "@chakra-ui/react";

import { ProjectsCard } from "./ProjectsCard";

interface ProjectsProps {
  ignoreCard?: number;
}

const projectsInfo = [
  {
    link: "/webdesign",
    img: "./home/mobile/image-web-design.jpg",
    heading: "Web Design",
  },
  {
    link: "/appdesign",
    img: "./home/mobile/image-app-design.jpg",
    heading: "App Design",
  },
  {
    link: "/graphicdesign",
    img: "./home/mobile/image-graphic-design.jpg",
    heading: "Graphic Design",
  },
];

export const Projects: React.FC<ProjectsProps> = ({ ignoreCard = -1 }) => {
  const renderCards = () => {
    return projectsInfo.map((info, idx) =>
      idx !== ignoreCard ? <ProjectsCard cardInfo={info} /> : ""
    );
  };

  return (
    <Grid
      templateColumns="330px"
      templateRows="repeat(3, 250px)"
      gap="2rem"
      justifyContent="center"
      mt="6rem"
    >
      {renderCards()}
    </Grid>
  );
};
