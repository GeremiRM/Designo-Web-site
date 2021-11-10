import { Button } from "@chakra-ui/react";

interface ButtonCompProps {
  bg: string;
  color: string;
}

export const ButtonComp: React.FC<ButtonCompProps> = ({
  bg,
  color,
  children,
}) => {
  return (
    <Button
      textTransform="uppercase"
      bg={bg}
      color={color}
      fontSize="15px"
      p="1.75rem"
      letterSpacing="1px"
      borderRadius="8px"
    >
      {children}
    </Button>
  );
};
