import { Grid } from "@chakra-ui/react";
import { Wrapper } from "../General/Wrapper";

import { ProjectsCard } from "./ProjectsCard";

interface ProjectsProps {
  ignoreCard?: number;
}

const projectsInfo = [
  {
    link: "/webdesign",
    img: {
      base: "./home/mobile/image-web-design.jpg",
      sm: "./home/tablet/image-web-design.jpg",
      md: "./home/desktop/image-web-design.jpg",
    },
    heading: "Web Design",
  },
  {
    link: "/appdesign",
    img: {
      base: "./home/mobile/image-app-design.jpg",
      sm: "./home/tablet/image-app-design.jpg",
      md: "./home/desktop/image-app-design.jpg",
    },
    heading: "App Design",
  },
  {
    link: "/graphicdesign",
    img: {
      base: "./home/mobile/image-graphic-design.jpg",
      sm: "./home/tablet/image-graphic-design.jpg",
      md: "./home/desktop/image-graphic-design.jpg",
    },
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
    <Wrapper>
      <Grid
        templateColumns={{ base: "330px", sm: "100%" }}
        autoRows={{ base: "250px", sm: "200px" }}
        gap="2rem"
        justifyContent="center"
        py="6rem"
      >
        {renderCards()}
      </Grid>
    </Wrapper>
  );
};
