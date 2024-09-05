import React from "react";
import DailyActivityChart from "../Components/DailyActivityChart";
import AverageSessionsChart from "../Components/AverageSessionsChart";
import ActivityChart from "../Components/ActivityChart";
import ScoreChart from "../Components/ScoreChart";
import InfoCardsGroup from "../Components/InfoCardsGroup";
import AsideNav from "../Components/AsideNav";
import UserInfo from "../Components/UserInfo";
import "./style/acceuil.scss";

export default function App() {
  return (
      <div>
        <AsideNav></AsideNav>
        <div className="accueil">
          <UserInfo></UserInfo>
          <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
          <div className="acceuil_MainData">
            <div className="Graphs">
              <DailyActivityChart></DailyActivityChart>
              <div className="BoxOfGraphs">
                <ActivityChart></ActivityChart>
                <AverageSessionsChart></AverageSessionsChart>
                <ScoreChart></ScoreChart>
              </div>
            </div>
            <div className="information-stat">
              <InfoCardsGroup></InfoCardsGroup>
            </div>
          </div>
        </div>
      </div>
  );
}
