import './App.css';
import { ThemeProvider } from './components/ThemeProvider'
import { ThemeWrapper } from './components/ThemeWrapper'

////<ThemeWrapper />
//  <NavProvider />
// <AboutWrapper />

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
