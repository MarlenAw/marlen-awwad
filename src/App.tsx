import { ThemeProvider } from 'styled-components';
import { TTheme } from './theme/theme';
import GlobalStyled from './components/styles/Global';
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <ThemeProvider theme={TTheme}>
      <>
        <GlobalStyled />
        <ContactMe />
      </>
    </ThemeProvider> 
    </>
  );
}

export default App;
