import { Grid } from "@chakra-ui/react";
import { DisplayCard } from "./DisplayCard";

interface DisplayProps {
  info: any;
}

export const Display: React.FC<DisplayProps> = ({ info }) => {
  const renderDisplayCards = () => {
    return info.map((cardInfo) => <DisplayCard cardInfo={cardInfo} />);
  };

  return (
    <Grid templateColumns="330px" justifyContent="center" gap="5rem" mt="8rem">
      {renderDisplayCards()}
    </Grid>
  );
};
