import {
  getActivity,
  getAverageSessions,
  getGeneralInfo,
  getPerformance,
} from "../Api/server";

export default async function userLoader({ params }) {
  const { id } = params;

  const generalInfo = (await getGeneralInfo(id)).data;
  const score = [
    {
      name: "",
      uv: 100,
      fill: "#ffffff",
    },
    {
      name: "Score",
      uv: generalInfo.score * 100,
      fill: "#ff0000",
    },
  ];
  const activity = (await getActivity(id)).data.sessions;

  const averageSessions = (await getAverageSessions(id)).data.sessions;

  const performanceResult = (await getPerformance(id)).data;

  const perfomance = {
    kinds: performanceResult.kind,
    data: performanceResult.data,
  };

  return {
    generalInfo,
    score,
    activity,
    averageSessions,
    perfomance,
  };
}
