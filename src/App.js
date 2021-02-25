import React, { Component } from 'react';
import './styles/styles.css';
import Header from "./Header.js";
import Cover from "./Cover.js";
import About from "./About.js";
import Music from "./Music.js";
import Footer from "./Footer.js";

class App extends Component {
  render() {
    return(
      <body>
        <Header />
        <main>
          <Cover />
          <About />
          <Music />
        </main>
        <Footer />
      </body>

    )
  }
}

export default App;
