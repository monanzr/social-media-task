import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Rtl from "./components/Rtl/Rtl";
import SocialMediaWrapper from './components/SocialMedia/SocialMediaWrapper';
import SettingComponent from './components/SettingComponent/SettingComponent';


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Rtl>
        <CssBaseline />
        <SocialMediaWrapper />
        <SettingComponent />
        </Rtl>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
