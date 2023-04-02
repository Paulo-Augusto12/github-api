import React from "react";
import { HomePage } from "./HomePage";
import { useTheme } from "./hook/useTheme";

function App() {
  const theme = useTheme();
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme.colors.backgroundColor,
      }}
    >
      <HomePage />
    </div>
  );
}

export default App;
