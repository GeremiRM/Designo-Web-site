import { Layout } from "../components/Layout/Layout";
import { Stack } from "@chakra-ui/react";

import { info } from "../components/Locations/LocationsInfo";
import { LocationsCard } from "../components/Locations/LocationsCard";

const locations: React.FC<{}> = ({}) => {
  const renderLocationsCards = () => {
    return info.map((cardInfo) => <LocationsCard cardInfo={cardInfo} />);
  };

  return (
    <Layout>
      <Stack
        textAlign={{ base: "center", md: "left" }}
        spacing="2rem"
        w={{ base: "100%", sm: "680px" }}
        mx="auto"
      >
        {renderLocationsCards()}
      </Stack>
    </Layout>
  );
};

export default locations;
