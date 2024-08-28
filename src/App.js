import React from "react";
import DailyActivityChart from "./Components/DailyActivityChart";
import Header from "./Components/Header";
import AverageSessionsChart from "./Components/AverageSessionsChart";
import ActivityChart from "./Components/ActivityChart";
import ScoreChart from "./Components/ScoreChart";
import InfoCardsGroup from "./Components/InfoCardsGroup";
import AsideNav from "./Components/AsideNav";
import UserInfo from "./Components/UserInfo";

export default function App(){
return(
  <div>
    <Header></Header>
    <UserInfo></UserInfo>
    <DailyActivityChart></DailyActivityChart>
    <AverageSessionsChart></AverageSessionsChart>
    <ActivityChart></ActivityChart>
    <ScoreChart></ScoreChart>
    <InfoCardsGroup></InfoCardsGroup>
    <AsideNav></AsideNav>
  </div>
)
}