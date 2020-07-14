import React from "react";
import { Card } from "antd";
import HighLightContainer from "./styles/HighLightContainer";

const HighLightPanel = () => {
  return (
    <HighLightContainer>
      <div className="highlight-header">
        <h1 className="highlight-header__h1">How Can I Help You?</h1>
        <p className="highlight-header__p">
          Our work then targeted, best practices outcomes social innovation
          synergy. Venture philanthropy, revolutionary inclusive policymaker
          relief. User-centered program areas scale.
        </p>
      </div>
      <div className="highlight-tiles">
        <Card className="highlight-tile" style={{ backgroundColor: "#e5e5e5" }}>
          <div className="title">
            <h2>Consult</h2>

            <span className="icon">
              <i className="fa fa-comments-o" aria-hidden="true"></i>
            </span>
          </div>
          <p className="card-paragraph">
            Co-create, design thinking; strengthen infrastructure resist
            granular. Revolution circular, movements or framework social impact
            low-hanging fruit. Save the world compelling revolutionary progress.
          </p>
        </Card>
        <Card className="highlight-tile" style={{ backgroundColor: "#e5e5e5" }}>
          <div className="title">
            <h2>Design</h2>

            <span className="icon">
              <i className="fa fa-paint-brush" aria-hidden="true"></i>
            </span>
          </div>
          <p className="card-paragraph">
            Policymaker collaborates collective impact humanitarian shared value
            vocabulary inspire issue outcomes agile. Overcome injustice deep
            dive agile issue outcomes vibrant boots on the ground sustainable.
          </p>
        </Card>
        <Card className="highlight-tile" style={{ backgroundColor: "#e5e5e5" }}>
          <div className="title">
            <h2>Develop</h2>

            <span className="icon">
              <i className="fa fa-cubes" aria-hidden="true"></i>
            </span>
          </div>
          <p className="card-paragraph">
            Revolutionary circular, movements a or impact framework social
            impact low- hanging. Save the compelling revolutionary inspire
            progress. Collective impacts and challenges for opportunities of
            thought provoking.
          </p>
        </Card>
        <Card className="highlight-tile" style={{ backgroundColor: "#e5e5e5" }}>
          <div className="title">
            <h2>Marketing</h2>

            <span className="icon">
              <i className="fa fa-bullhorn" aria-hidden="true"></i>
            </span>
          </div>
          <p className="card-paragraph">
            Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary
            agile, replicable, effective altruism youth. Mobilize commitment to
            overcome injustice resilient, uplift social transparent effective.
          </p>
        </Card>
        <Card className="highlight-tile" style={{ backgroundColor: "#e5e5e5" }}>
          <div className="title">
            <h2>Manage</h2>

            <span className="icon">
              <i className="fa fa-tasks" aria-hidden="true"></i>
            </span>
          </div>
          <p className="card-paragraph">
            Change-makers innovation or shared unit of analysis. Overcome
            injustice outcomes strategize vibrant boots on the ground
            sustainable. Optimism, effective altruism invest optimism corporate
            social.
          </p>
        </Card>
        <Card className="highlight-tile" style={{ backgroundColor: "#e5e5e5" }}>
          <div className="title">
            <h2>Evolve</h2>

            <span className="icon">
              <i className="fa fa-line-chart" aria-hidden="true"></i>
            </span>
          </div>
          <p className="card-paragraph">
            Activate catalyze and impact contextualize humanitarian. Unit of
            analysis overcome injustice storytelling altruism. Thought
            leadership mass incarceration. Outcomes big data, fairness, social
            game-changer.
          </p>
        </Card>
      </div>
    </HighLightContainer>
  );
};

export default HighLightPanel;
