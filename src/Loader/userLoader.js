import { serverFetch } from "../Api/server";
import UserData from "../utils/UserData";

export default async function userLoader({ params }) {
  try {
    const { id } = params;
    const { getGeneralInfo, getActivity, getAverageSessions, getPerformance } =
      serverFetch();

    const generalInfo = (await getGeneralInfo(id)).data;

    const activity = (await getActivity(id)).data.sessions;

    const averageSessions = (await getAverageSessions(id)).data.sessions;

    const performance = (await getPerformance(id)).data;

    return new UserData(generalInfo, activity, averageSessions, performance);
  } catch (e) {
    console.error(e);
  }
}
