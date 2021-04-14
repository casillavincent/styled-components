// Objects for Themes
import { createGlobalStyle } from "styled-components";

export const darkTheme = {
   body: "#202123",
   fontColor: "white",
};

export const lightTheme = {
   body: "white",
   fontColor: "#202123",
};
export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }
    h1, h2, h3, h4, h5, h6, p {
        color: ${(props) => props.theme.fontColor}
    }
    

`;
