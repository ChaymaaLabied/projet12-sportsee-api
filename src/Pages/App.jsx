import React from "react";
import { useLoaderData } from "react-router-dom";
import AsideNav from "../Components/AsideNav";
import ActivityChart from "../Components/Charts/ActivityChart";
import AverageSessionsChart from "../Components/Charts/AverageSessionsChart";
import DailyActivityChart from "../Components/Charts/DailyActivityChart";
import ScoreChart from "../Components/Charts/ScoreChart";
import InfoCardsGroup from "../Components/InfoCardsGroup";
import UserInfo from "../Components/UserInfo";
import "../style/acceuil.scss";

export default function App() {
  const { generalInfo, score, activity, averageSessions, perfomance } =
    useLoaderData();
    console.log(activity)

  return (
    <div>
      <AsideNav/>
      <div className="accueil">
        <UserInfo generaleInfos={generalInfo}/>
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        <div className="acceuil_MainData">
          <div className="Graphs">
            <DailyActivityChart userActivity={activity}/>
            <div className="BoxOfGraphs">
              <ActivityChart userPerformance={perfomance} />
              <AverageSessionsChart userAverageSessions={averageSessions}/>
              <ScoreChart score={score}/>
            </div>
          </div>
          <div className="information-stat">
            <InfoCardsGroup generaleInfos={generalInfo}/>
          </div>
        </div>
      </div>
    </div>
  );
}
