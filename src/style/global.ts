import { createGlobalStyle } from "styled-components";
import "sanitize.css";

interface Props {
  themeName: string;
}
export const GlobalStyle = createGlobalStyle<Props>`
    body {
        margin: 0;
        padding: 0;
        background-color: ${(props) =>
          props.themeName === "light" ? "white" : "black"};
    }

    h1 {
        margin: 0;
    }

    * {
        color: ${(props) => (props.themeName === "light" ? "black" : "white")};
  
        
    }
`;
