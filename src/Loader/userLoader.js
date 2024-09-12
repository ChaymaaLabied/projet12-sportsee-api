import {
  getActivity,
  getAverageSessions,
  getGeneralInfo,
  getPerformance,
} from "../Api/server";

export default async function userLoader({ params }) {
  const { id } = params;

  const generalInfo = (await getGeneralInfo(id)).data;
  // const score = [
  //   {
  //     name: "",
  //     uv: 100,
  //     fill: "#ffffff",
  //   },
  //   {
  //     name: "Score",
  //     uv: generalInfo.score * 100,
  //     fill: "#ff0000",
  //   },
  // ];
  const score = [
    {
      name: "",
      todayScore: 100, // Utilisez `todayScore` pour correspondre à `dataKey` dans RadialBar
      fill: "#ffffff",
    },
    {
      name: "Score",
      todayScore: generalInfo.score * 100, // Utilisez `todayScore` pour correspondre à `dataKey`
      fill: "#ff0000",
    },
  ];
  
  const activity = (await getActivity(id)).data.sessions;

  const averageSessions = (await getAverageSessions(id)).data.sessions;

  const performanceResult = (await getPerformance(id)).data;

  const performance = {
    kinds: performanceResult.kind,
    data: performanceResult.data,
  };

  return {
    generalInfo,
    score,
    activity,
    averageSessions,
    performance,
  };
}
