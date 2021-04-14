import React from "react";
import "./scss/styles.scss";
import { FiDribbble, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";

//Portrait
import sitePortrait from "./assets/portrait.jpg";
import ThemeToggle from "./components/ThemeToggle";

function App() {
   return (
      <>
         <main className="main-content">
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
         </main>
         <ThemeToggle />
      </>
   );
}

export default App;
