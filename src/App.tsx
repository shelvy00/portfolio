import { useState } from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Bio from "./Bio/Bio";
import Projects from "./Projects/Projects";
import Navbar from "./Navbar/Navbar";

const App = () => {
  const modeSaved = localStorage.getItem("darkMode");
  const mode = (modeSaved && JSON.parse(modeSaved)) || true;

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(mode);

  const tabs = [
    { component: <Bio />, title: "Home" },
    { component: <Projects />, title: "Projects" },
  ];

  return (
    <Grommet full theme={grommet} themeMode={darkMode ? "dark" : "light"}>
      <Navbar
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        onTabPress={setActiveTabIndex}
        darkMode={darkMode}
        onPressMode={setDarkMode}
      />
      {tabs[activeTabIndex].component}
    </Grommet>
  );
};

export default App;
