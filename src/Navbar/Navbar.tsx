import { Box, Tab, Tabs, Header, Nav } from "grommet";
import HeaderIconGroup from "./HeaderIconGroup";

interface Props {
  tabs: { component: JSX.Element; title: string }[];
  activeTabIndex: number;
  onTabPress: (index: number) => void;
  darkMode: boolean;
  onPressMode: any;
}

const Navbar = ({
  tabs,
  onTabPress,
  activeTabIndex,
  darkMode,
  onPressMode,
}: Props) => {
  return (
    <Header hoverIndicator={true}>
      <Box direction="row" align="center" gap="small" justify="between">
        <Tabs
          activeIndex={activeTabIndex}
          onActive={onTabPress}
          justify="start"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} title={tab.title} />
          ))}
        </Tabs>
      </Box>
      <Nav direction="row">
        <HeaderIconGroup darkMode={darkMode} onPressMode={onPressMode} />
      </Nav>
    </Header>
  );
};

export default Navbar;
