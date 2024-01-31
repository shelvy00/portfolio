import { Box, Grid } from "grommet";
import ProjectCard from "./ProjectCard";

import Spotify from "./images/Spotify.png";
import TodoReact from "./images/Todo-React.png";
import Hackernews from "./images/Hackernews.png";
import thisSite from "./images/thisSite.png";
import zentask from "./images/zen-task.png"

import {
  SiAmazonaws,
  SiSpringboot,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiThreedotjs,
  SiReact,
  SiGo,
  SiRaspberrypi,
} from "react-icons/si";
import { HiOutlineCommandLine } from "react-icons/hi2";
import {FaJava } from "react-icons/fa"

const projects = [
  {
    title: "Spotify",
    repository: "https://github.com/shelvy00/Spotify",
    image: Spotify,
    icons: [SiReact],
    route: "/Visualizer",
  },
  {
    title: "TodoReact",
    repository: "https://github.com/shelvy00/Todo-React",
    image: TodoReact,
    icons: [SiReact],
    route: undefined,
  },
  {
    title: "Hackernews",
    repository: "https://github.com/shelvy00/HackerNews",
    image: Hackernews,
    icons: [SiReact],
    route: undefined,
  },
  {
    title: "This Website",
    repository: "https://github.com/shelvy00/portfolio",
    image: thisSite,
    icons: [SiTypescript, SiReact],
    route: undefined,
  },
  {
    title: "Zen-Task Manager",
    repository: "https://github.com/shelvy00/Zen-manager-liftoff",
    image: zentask,
    icons: [SiJavascript, SiSpringboot, SiAmazonaws, FaJava],
    route: undefined,
  },
];

const Projects = () => {
  return (
    <Box>
      <Grid gap="medium" columns={{ count: "fit", size: "medium" }} pad="large">
        {projects.map((value, index) => (
          <ProjectCard key={index} {...value} />
        ))}
      </Grid>
    </Box>
  );
};
export default Projects;
