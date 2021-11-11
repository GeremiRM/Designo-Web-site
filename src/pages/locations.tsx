import { Layout } from "../components/Layout/Layout";
import { Stack, Box } from "@chakra-ui/react";

import { info } from "../components/Locations/LocationsInfo";
import { LocationsCard } from "../components/Locations/LocationsCard";
import { Wrapper } from "../components/General/Wrapper";

const locations: React.FC<{}> = ({}) => {
  const renderLocationsCards = () => {
    return info.map((cardInfo) => <LocationsCard cardInfo={cardInfo} />);
  };

  return (
    <Layout>
      <Box>
        <Wrapper>
          <Stack
            textAlign={{ base: "center", md: "left" }}
            spacing={{ base: "2rem", sm: "8rem" }}
            pb="6rem"
          >
            {renderLocationsCards()}
          </Stack>
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default locations;
