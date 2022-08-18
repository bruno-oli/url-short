import React, {useState} from "react"

import "./styles/main.css"
import "./styles/LinkBox.css"
//Imagens
import Logo from "./images/logo.svg"
import WorkingImage from "./images/illustration-working.svg"
import Fully from "./images/icon-fully-customizable.svg"
import Brand from "./images/icon-brand-recognition.svg"
import Detailed from "./images/icon-detailed-records.svg"
import LogoFooter from "./images/logo-footer.svg"
import IconFacebook from "./images/icon-facebook.svg"
import IconTwitter from "./images/icon-twitter.svg"
import IconPinterest from "./images/icon-pinterest.svg"
import IconInstagram from "./images/icon-instagram.svg"
//Icones
import { AiOutlineMenu } from "react-icons/ai"
function App() {
  function handleMenu() {
    document.querySelector("nav").classList.toggle("active")
  }
  const [links, setLinks] = useState([])
  async function handleNewLink() {
    const API_BASE = "https://api.shrtco.de/v2/shorten?url="
    const API_LINK = document.querySelector("#link__content").value
    const req = await fetch(`${API_BASE}${API_LINK}`)
    const response = await req.json()
    setLinks([...links, response])
  }
  function copy({target}) {
    const div = document.getElementById(target.id)
    navigator.clipboard.writeText(div.children[2].innerHTML)
    div.children[3].classList.add("active")
    div.children[3].innerText = "Copied!"
  }
  return (
    <>
      <header>
        <img src={Logo} alt="Shortly" />
        <AiOutlineMenu onClick={handleMenu}/>
        <nav>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
          <hr />
          <a href="/">Login</a>
          <button>Sign Up</button>
        </nav>
      </header>
      <main>
        <section className="started">
          <img src={WorkingImage} alt="" />
          <h1>More than just shorter links</h1>
          <p>Build your brand recognition and get detailed insights on how your links are perfoming.</p>
          <button>Get Started</button>
        </section>
        <section className="input__link">
          <div>
            <input placeholder="Shorten a link here..." type="text" id="link__content" />
            <button onClick={handleNewLink}>Shorten in!</button>
          </div>
        </section>
        <section className="link__result">
          {
            links.map((link, key) => {
              return (
                <div key={key} id={key} className="link__container">
                  <span className="link__original">
                    {link.result.original_link}
                  </span>
                  <hr />
                  <a target={"_blank"} href={`https://${link.result.short_link}`} className={`link__short`} rel="noreferrer">
                    {link.result.short_link}
                  </a>
                  <button onClick={copy} id={key} className={`link__copy`}>Copy</button>
                </div>
              )
            })
          }
          <h2>Advanced Statistics</h2>
          <p>Track how your links are perfoming across the web with our advanced statistics dashboard.</p>
          <div className="statistics">
            <div className="statistic">
              <div>
                <img src={Brand} alt="" />
              </div>
              <h3>Brand Recognition</h3>
              <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div className="statistic">
              <div>
                <img src={Detailed} alt="" />
              </div>
              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className="statistic">
              <div>
                <img src={Fully} alt="" />
              </div>
              <h3>Fully Customizable</h3>
              <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </div>
        </section>
        <section className="boost">
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </section>
      </main>
      <footer>
        <img src={LogoFooter} alt="Shortly" />
        <ul>
          <span>Features</span>
          <a href="/">Link Shortening</a>
          <a href="/">Branded Links</a>
          <a href="/">Analytics</a>
        </ul>
        <ul>
          <span>Resources</span>
          <a href="/">Blog</a>
          <a href="/">Developers</a>
          <a href="/">Support</a>
        </ul>
        <ul>
          <span>Company</span>
          <a href="/">About</a>
          <a href="/">Our Team</a>
          <a href="/">Carrers</a>
          <a href="/">Contact</a>
        </ul>
        <div>
          <a href="/"><img src={IconFacebook} alt="Facebook" /></a>
          <a href="/"><img src={IconTwitter} alt="Twitter" /></a>
          <a href="/"><img src={IconPinterest} alt="Pinterest" /></a>
          <a href="/"><img src={IconInstagram} alt="Instagram" /></a>
        </div>
      </footer>
    </>
  )
}

export default App
