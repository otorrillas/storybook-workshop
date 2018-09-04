// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";

import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import { ScaleLoader } from "react-spinners";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "./style.css";
import advancedConfig from "../assets/advanced-config.png";
import basicConfig from "../assets/basic-config.png";
import basicStory from "../assets/basic-story.png";
import buildStorybook from "../assets/build-storybook.png";
import customWebpack from "../assets/custom-webpack.png";
import storybook from "../assets/storybook.png";

const theme = createTheme(
  {
    background: "#FFFFFF",
    primary: "#221249",
    secondary: "#21ADDD",
    tertiary: "#9D9D9D",
    quartenary: "#DE2728"
  },
  {
    primary: "Arial",
    secondary: "Arial"
  }
);

const slideProps = {
  bgColor: "background",
  progressColor: "tertiary",
  transition: ["fade"]
};

const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};

const Tick = () => <span style={{ color: "#33B969" }}>✓</span>;
const Info = () => <span style={{ color: "#33B969" }}>info</span>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} contentHeight={1000} contentWidth={1150}>
        <Slide {...slideProps} transition={["zoom"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Storybook
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Introduction, setup and tips
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            About me
          </Heading>
          <p>Oriol Torrillas</p>
          <p>Interactive Developer @ Sapient</p>
          <p margin="10px 0 0" textColor="secondary" fit>
            github.com/otorrillas
          </p>
          <Text margin="10px 0 0" textColor="secondary" size={2}>
            <span>🚴🏽</span> <span>🏊</span> <span>📷</span>
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Agenda
          </Heading>
          <List textColor="secondary">
            <ListItem>Introduction to Storybook</ListItem>
            <ListItem>Basic setup</ListItem>
            <ListItem>Custom configuration</ListItem>
            <ListItem>Addons</ListItem>
            <ListItem>Q&A</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            What is Storybook?
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={2} fit>
            UI environment for developing components in <b>isolation</b>
          </Text>
          <img src={storybook} height="650px" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Writing a story
          </Heading>
          <img src={basicStory} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Setup
          </Heading>
          <br />
          <Terminal
            isMaximized={false}
            title="otorrillas@storybook: ~(fish)"
            output={[
              <Typist key="cd-my-proj" cursor={cursor}>
                cd my-project
              </Typist>,
              <Typist key="npm-i-storybook" cursor={cursor}>
                npx @storybook/cli getstorybook
              </Typist>,
              [
                <div
                  key="loader"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "#9D9D9D"
                  }}
                >
                  <ScaleLoader color="#9D9D9D" loading height={15} />
                  <p style={{ margin: 0, marginLeft: "0.5em" }}>
                    Installing dependencies...
                  </p>
                </div>,
                <div style={{ color: "#33B969" }} key="installed">
                  ⚡️ Dependencies installed!
                </div>
              ],
              <p key="simplest-way">
                <span style={{ backgroundColor: "#9D9D9D", marginLeft: "5px" }}>
                  getstorybook - the simplest way to add a storybook to your
                  project.
                </span>
              </p>,
              <span
                key="step-1"
                style={{ marginLeft: "5px", color: "#9D9D9D" }}
              >
                • Detecting project type. <Tick />
              </span>,
              <span
                key="step-2"
                style={{ marginLeft: "5px", color: "#9D9D9D" }}
              >
                • Adding storybook support to your "Create React App" based
                project. <Tick />
              </span>,
              <span
                key="step-3"
                style={{ marginLeft: "5px", color: "#9D9D9D" }}
              >
                • Preparing to install dependencies. <Tick />
              </span>,
              <div
                key="yarn-install"
                style={{
                  marginLeft: "10px",
                  lineHeight: "10px",
                  color: "#9D9D9D"
                }}
              >
                <p>yarn install v1.5.1</p>
                <p>[1/4] 🔍 Resolving packages...</p>
                <p>[2/4] 🚚 Fetching packages...</p>
                <p>[3/4] 🔗 Linking dependencies...</p>
                <p>[4/4] 📃 Building fresh packages...</p>
                <p>
                  <span style={{ color: "#33B969" }}>success</span> Saved
                  lockfile.
                </p>
                <p>✨ Done in 20.59s.</p>
              </div>,
              <span
                key="step-4"
                style={{ marginLeft: "5px", color: "#9D9D9D" }}
              >
                • Installing dependencies. <Tick />
              </span>,
              <div key="step-5" style={{ marginLeft: "5px", color: "#9D9D9D" }}>
                <p>To run your storybook, type:</p>
                <span
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#9D9D9D",
                    color: "#FFFFFF"
                  }}
                >
                  yarn storybook
                </span>
                <p>
                  For more information visit:{" "}
                  <a style={{ color: "#21ADDD" }}>https://storybook.js.org</a>
                </p>
              </div>,
              [
                <div key="run-storybook">
                  <Typist cursor={cursor}>yarn storybook</Typist>
                  <br />
                </div>,
                <div
                  key="yarn-run"
                  style={{
                    marginLeft: "10px",
                    lineHeight: "10px",
                    color: "#9D9D9D"
                  }}
                >
                  <p>yarn run v1.5.1</p>
                  <p style={{ color: "#707070" }}>
                    $ start-storybook -p 9009 -s public
                  </p>
                  <p>
                    <Info /> @storybook/react v3.4.1
                  </p>
                  <p>
                    <Info />
                  </p>
                  <p>
                    <Info /> => Loading static files from:
                    /Users/oritorri/Sapient/workshops/test/public .
                  </p>
                  <p>
                    <Info /> => Loading custom addons config.
                  </p>
                  <p>
                    <Info /> => Using default webpack setup based on "Create
                    React App".
                  </p>
                  <p>webpack built ff898fa748423117d134 in 5901ms</p>
                  <p>
                    <Info /> Storybook started on =>{" "}
                    <a style={{ color: "#21ADDD" }}>http://localhost:9009/</a>
                  </p>
                </div>
              ],
              <span key="empty-span" />
            ]}
          />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Sample config
          </Heading>
          <img src={basicConfig} />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Advanced config
          </Heading>
          <img src={advancedConfig} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Custom webpack config
          </Heading>
          <img src={customWebpack} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Static export
          </Heading>
          <img src={buildStorybook} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Extra
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={2} fit bold>
            Deploying to Github Pages
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Addons
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
