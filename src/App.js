import React, { useState } from "react";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components";
import {
  // PrimaryButton, SecondaryButton, TertiaryButton, 
  SignUpModal
} from "./components";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button style={{ margin: "0 16px 24px", padding: "8px", background: "none" }} onClick={() => setUseDarkTheme(!useDarkTheme)}>Switch Theme</button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>

      <div style={{
        background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
      <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        {/* <PrimaryButton>Hello </PrimaryButton>
        <SecondaryButton >Hello </SecondaryButton>
        <TertiaryButton >Hello </TertiaryButton> */}
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
