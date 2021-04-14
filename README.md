# Styled Components
Testing out switching between styled components.
```javascript
import React from "react";
import "./scss/styles.scss";
import { FiDribbble, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";
import { MdWbSunny } from "react-icons/md";
import { BsMoon } from "react-icons/bs";

import { useState } from "react";

// Styled Components
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./globals/themes";

// Portrait
import sitePortrait from "./assets/portrait.jpg";

const StyledApp = styled.main``;

function App() {
   // Toggle light and dark theme
   const [theme, setTheme] = useState("light");
   const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
   };
   return (
      // The props takes in an object with CSS properties
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
         <GlobalStyles />
         <StyledApp className="main-content">
            <article className="main-content__profile">
               <section className="main-content__profile--text">
                  <h1>Lorem ipsum dolor sit</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem minima excepturi
                     tenetur officiis consequuntur, voluptate, aperiam laboriosam maxime sunt totam
                     debitis doloribus, molestiae veritatis provident! Enim, minima blanditiis.
                     Aspernatur, repellendus?
                  </p>
                  <form action="" className="main-content__form">
                     {/* Email Field */}
                     <div className="form-field email-field">
                        <input type="text" name="email" id="email" placeholder="E-mail" required />
                     </div>

                     {/* Submit Field */}
                     <div className="form-field submit-field">
                        <input type="submit" value="Sign Up" />
                     </div>
                  </form>

                  <div className="main-content__socials">
                     {/* Dribbble Icon */}
                     <a href="" className="dribbble" id="dribbble">
                        <FiDribbble size="1.5em" />
                     </a>

                     {/* Twitter Icon */}
                     <a href="" className="twitter" id="twitter">
                        <FiTwitter size="1.5em" />
                     </a>

                     {/* Instagram Icon */}
                     <a href="" className="instagram" id="instagram">
                        <FiInstagram size="1.5em" />
                     </a>

                     {/* Email Icon */}
                     <a href="" className="email" id="email">
                        <FiMail size="1.5em" />
                     </a>
                  </div>
               </section>
               <section className="main-content__profile--portrait">
                  <img src={sitePortrait} alt="Girl with Pink Hair" width="200" />
               </section>
            </article>
         </StyledApp>
         <aside className="theme-toggle">
            <button
               className="theme-toogle__button"
               onClick={() => {
                  themeToggler();
               }}
            >
               {theme === "light" ? <MdWbSunny size="2em" /> : <BsMoon size="2em" color="white" />}
               <p>Toggle Theme</p>
            </button>
         </aside>
      </ThemeProvider>
   );
}

export default App;
```
