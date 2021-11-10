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
      <Stack textAlign="center" spacing="2rem">
        {renderLocationsCards()}
      </Stack>
    </Layout>
  );
};

export default locations;
