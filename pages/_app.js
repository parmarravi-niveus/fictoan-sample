import "../styles/globals.css";
import { ThemeProvider } from "fictoan-react";
import { WebsiteLightTheme } from "../styles/Website.light.theme";
import { GlobalFonts } from "../assets/fonts/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={WebsiteLightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
