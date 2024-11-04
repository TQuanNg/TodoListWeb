import './App.css';
import {ThemeProvider} from'./components/ThemeProvider'
import { ThemeWrapper } from './components/ThemeWrapper'
import { NavProvider} from './components/navigation-bar/NapProvider'
import { AboutWrapper} from './components/navigation-bar/AboutWrapper'

////<ThemeWrapper />
//  <NavProvider />
// <AboutWrapper />

function App() {
  return (
    <div className="App">
      {/*<ThemeProvider>
        <ThemeWrapper />
      </ThemeProvider>*/}
      {/*<NavProvider />*/}

      <ThemeProvider>
        <ThemeWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
