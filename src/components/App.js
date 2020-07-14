import React, { Component } from "react";
import "../App.css";
import Logo from "./Logo";
import PageHeader from "./PageHeader";
import Notification from "./NotificationPanel";
import { Layout } from "antd";
import HighlightsPanel from "./HighlightsPanel";
import NewsLetterPanel from "./NewsLetterPanel";
import colors from "./styles/colors";
//Footer component from ant design
const { Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout className="bg-color">
          <Notification />
          <Logo />
          <PageHeader />
          <HighlightsPanel />
          <NewsLetterPanel />
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: `${colors.darkBlue}`,
              color: "white",
            }}
          >
            &#169; 2020 Berlian Khatulistiwa. All rights reserved
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
