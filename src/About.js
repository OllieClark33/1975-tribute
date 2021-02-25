import React, { Component } from "react";
import InfoBox from "./InfoBox.js";
import { v4 as uuidv4 } from "uuid";

const AboutDetails = [
  {
    title: "About",
    content:
      "The 1975 are an English pop-rock band formed in 2002 in Wilmslow, Cheshire. Now based in Manchester, the band consists of lead vocalist, producer, lyricist and rhythm guitarist Matthew Healy, lead guitarist Adam Hann, bassist Ross MacDonald, and...",
  },
  {
    title: "History",
    content:
      "The band's origins trace to their attendance at secondary school and playing together as teenagers. The band signed with Dirty Hit and Polydor Records where they released a series of EPs throughout 2012 before releasing their self-titled debut album in 2013, which...",
  },
  {
    title: "Awards",
    content: "As of May 2019, The 1975 have won 10 awards from 40 nominations. Awards include Best British Group and Best British Album of the Year at the 2019 Brit Awards and Best Contemporary Song and Songwriters of the Year at the 2019 Ivor Novello Awards...",
  },
];

class About extends Component {
  render() {
    let content = AboutDetails;
    return (
      <section id="about">
        <div id="infomation-container">
          {content.map((section) => (
            <InfoBox
              key={uuidv4()}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default About;
