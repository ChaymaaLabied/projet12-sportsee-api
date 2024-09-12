import React from "react";
import { useLoaderData } from "react-router-dom";
import AsideNav from "../Components/AsideNav";
import ActivityChart from "../Components/Charts/ActivityChart";
import AverageSessionsChart from "../Components/Charts/AverageSessionsChart";
import DailyActivityChart from "../Components/Charts/DailyActivityChart";
import ScoreChart from "../Components/Charts/ScoreChart";
import InfoCardsGroup from "../Components/InfoCardsGroup";
import UserInfo from "../Components/UserInfo";
// import "../style/acceuil.scss";

export default function App() {
  const { generalInfo, score, activity, averageSessions, performance } =
    useLoaderData();
  console.log(activity);

  return (
    <>
      <AsideNav />
      <div className="Mainpage">
        <UserInfo generaleInfos={generalInfo} />
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        <div className="Mainpage__Dashboard">
          <div className="Mainpage__Dashboard--Main">
            <DailyActivityChart userActivity={activity} />
            <div className="figures">
              <ActivityChart userPerformance={performance} />
              <AverageSessionsChart userAverageSessions={averageSessions} />
              <ScoreChart score={score} />
            </div>
          </div>
          <div className="Mainpage__Dashboard--Aside">
            <InfoCardsGroup generaleInfos={generalInfo} />
          </div>
        </div>
      </div>
    </>
  );
}
