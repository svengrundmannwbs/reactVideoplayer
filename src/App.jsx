import { Stack } from "react-bootstrap";
import VideoPlayer from "./components/VideoPlayer";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./hooks/useThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitch />
      <VideoPlayer />
    </ThemeProvider>
  );
}

export default App;
