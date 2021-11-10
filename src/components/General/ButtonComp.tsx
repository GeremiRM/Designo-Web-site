import { Button } from "@chakra-ui/react";

interface ButtonCompProps {
  bg: string;
  color: string;
  hoverBg?: string;
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
      _hover={{ bg: "#FFAD9B", color: "white" }}
    >
      {children}
    </Button>
  );
};
