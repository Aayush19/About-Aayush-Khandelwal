import React, { Component } from "react";
// import '../../public/css/image.css'
import {intro} from '../Data/Data'

var data=intro.detail;
export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: "url(images/img_bg.jpg)",
                  Height: "600px",
                  transform: [{ rotate: "90deg" }]
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{ color: "white" }}>
                            {data[0].heading} <br />
                            {data[0].title}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://drive.google.com/open?id=19iiTwEFL5GMER94252HKCgFY9bQxN52a"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "white" }}
                            >
                              {data[0].operate}
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/img_bg.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{ color: "white" }}>
                            {data[1].heading}
                            <br /> {data[1].title}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="#projects"
                              
                              rel="noopener noreferrer"
                              style={{ color: "white" }}
                            >
                              {data[1].operate} <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
