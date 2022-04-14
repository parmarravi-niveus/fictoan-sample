import "../styles/globals.css";
import { ThemeProvider } from "fictoan-react";
import { WebsiteLightTheme } from "../styles/Website.light.theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={WebsiteLightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
