import React from "react";
import { DataProvider } from "./contexts/DataContext";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";

const App: React.FC = () => (
  <ThemeProvider>
  <DataProvider>
    <Home />
  </DataProvider>
  </ThemeProvider>
);

export default App;