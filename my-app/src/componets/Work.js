import React from "react";
// import teamCliScreenshot from "../images/team-cli-screenshot.png";
// import socialNetworkScreenshot from "../images/social-network-screenshot.png";
// import eCommerceScreenshot from "../images/e-commerce-screenshot.png";
// import artistInfoScreenshot from "../images/artist-info-screenshot.png";

const styles = {
  card: {
    width: "18rem",
  },
};
export default function Work() {
  return (
    <div>
      <div className="row d-flex justify-content-center text-center">
        <h1>Work Page</h1>
        <p>view repository!</p>
      </div>

      <div className="m-5 p-3 d-flex justify-content-around">
        <div className="row d-block">
          <a target={"_blank"} href="https://github.com/AlxMarz/REGEX-HOWTO">
            <div className="card" style={styles.card}>
              <img
                // src={teamCliScreenshot}
                className="card-img-top"
                alt="REGEX TUT"
              />
              <div className="card-body">
                <p className="card-text">
                 
                </p>
              </div>
            </div>
          </a>

          <a target={"_blank"} href="https://github.com/AlxMarz/code-quiz-game-">
            <div className="card" style={styles.card}>
              <img
                // src={socialNetworkScreenshot}
                className="card-img-top"
                alt="code quiz"
              />
              <div className="card-body">
                <p className="card-text">
              
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="row">
          <a target={"_blank"} href="https://github.com/AlxMarz/README-GEN">
            <div className="card" style={styles.card}>
              <img
                // src={artistInfoScreenshot}
                className="card-img-top"
                alt="README GEN"
              />
              <div className="card-body">
                <p className="card-text">
                
                </p>
              </div>
            </div>
          </a>

          <a target={"_blank"} href="https://github.com/AlxMarz/e-comm-app">
            <div className="card" style={styles.card}>
              <img
                // src={eCommerceScreenshot}
                className="card-img-top"
                alt="E Commerce Interface"
              />
              <div className="card-body">
                <p className="card-text">
                 
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}