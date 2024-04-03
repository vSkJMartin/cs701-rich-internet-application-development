import { createGlobalStyle } from "styled-components";
import Header from "@/components/Header";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", 
        "Cantarell", "Fira Sana", "Droid Sans", "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;


export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </>
  );
}
