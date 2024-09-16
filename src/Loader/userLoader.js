import { serverFetch } from "../Api/server";

export default async function userLoader({ params }) {
  const { id } = params;
  const { getGeneralInfo, getActivity, getAverageSessions, getPerformance } =
    serverFetch(false);

  const generalInfo = (await getGeneralInfo(id)).data;
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
