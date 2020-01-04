import React from "react";
import $ from "jquery";

class Header extends React.Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap" class="nav-border">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li id="home1">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li id="About1">
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li id="resume1">
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li id="Works1">
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li id="contact1">
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Shashank Priyam Jha</h1>
            <img
              class="my-img"
              src="https://i.ibb.co/w6TTvSB/25299771-10211150463342409-7845476385140863635-o.jpg"
            />
            <h2>Frontend Developer . B. Tech(E.C.E)</h2>
            <hr />
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/Kizashi" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/kizashi_spj" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/shashank-priyam-jha-05770ba3/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shashankpriyam/"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
