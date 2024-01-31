import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  ThemeContext,
  Box,
  ThemeType,
} from "grommet";
import { IconType } from "react-icons";
import { SiGo } from "react-icons/si";
import { getColors } from "../util";

interface Props {
  title: string;
  repository: string;
  image: any;
  icons: IconType[];
  route?: string;
}

const ProjectCard = ({ title, repository, image, icons, route }: Props) => (
  <Card
    key={title}
    onClick={() => window.open(repository)}
    focusIndicator={false}
    hoverIndicator={{ elevation: "large" }}
  >
    <CardBody focusIndicator={false}>
      <Image fill src={image} fit="contain" />
    </CardBody>
    <CardFooter
      pad={{ horizontal: "small" }}
      justify="between"
      height={{ min: "xxsmall" }}
    >
      <Text size="medium" weight={"normal"}>
        {title}
      </Text>
      <ThemeContext.Consumer>
        {(theme: ThemeType) => {
          const color = getColors(theme, "anchor");
          return (
            <Box direction="row">
              {icons.map((Icon, index) => (
                <Box pad={"xxsmall"} justify={"center"} key={index}>
                  <Icon size={Icon === SiGo ? 40 : 30} color={color} />
                </Box>
              ))}
            </Box>
          );
        }}
      </ThemeContext.Consumer>
    </CardFooter>
  </Card>
);

export default ProjectCard;
