import { Display } from "./Display/Display";

const info = [
  {
    img: "./shared/desktop/illustration-canada.svg",
    heading: "Canada",
    button: "See Location",
  },
  {
    img: "./shared/desktop/illustration-australia.svg",
    heading: "Australia",
    button: "See Location",
  },
  {
    img: "./shared/desktop/illustration-united-kingdom.svg",
    heading: "United Kingdom",
    button: "See Location",
  },
];

export const Links: React.FC<{}> = ({}) => {
  return <Display info={info} />;
};
