import React from "react";
import { HomePage } from "./HomePage";
import { useTheme } from "./hook/useTheme";

function App() {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.backgroundColor,
        padding: "2rem",
      }}
    >
      <HomePage />
    </div>
  );
}

export default App;
