import React from "react";
import "./Home.css";
import { Logo } from "../images/Netflix";
import { ConnectButton, Icon, TabList, Tab, Button } from "web3uikit";
import { movies } from "../helpers/library";

const Home = () => {
  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="connect">
        <Icon fill="white" size={24} svg="bell" />
        <ConnectButton />
      </div>
      <div className="topBanner">
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName={"Movies"}>
            <div className="scene">
              <img
                src={movies[0].Scene}
                className="sceneImg"
                alt={movies[0].Scene}
              ></img>
              <img
                className="sceneLogo"
                src={movies[0].Logo}
                alt={"sceneLogo"}
              ></img>
              <p className="sceneDesc">{movies[0].Description}</p>
              <div className="playButton">
                <Button
                  icon="chevronRightX2"
                  text="Play"
                  theme="secondary"
                  type="button"
                />
                <Button
                  icon="plus"
                  text="Add to My List"
                  theme="translucent"
                  type="button"
                  onClick={() => {
                    // console.log(myMovies);
                  }}
                />
              </div>
            </div>
            <div className="title">Movies</div>
            <div className="thumbs">
              {movies &&
                movies.map((e) => {
                  return (
                    <img
                      src={e.Thumnbnail}
                      className="thumbnail"
                      alt="thumbnail"
                      onClick={() => {
                        // setSelectedFilm(e);
                        // setVisible(true);
                      }}
                    ></img>
                  );
                })}
            </div>
          </Tab>
          <Tab tabKey={2} tabName={"Stories"} isDisabled={true}></Tab>
          <Tab tabKey={3} tabName={"MyList"}></Tab>
        </TabList>
      </div>
    </>
  );
};

export default Home;
