import React from "react";
import { DataProvider } from "./contexts/DataContext";
import Home from "./pages/Home";

const App: React.FC = () => (
  <DataProvider>
    <Home />
  </DataProvider>
);

export default App;