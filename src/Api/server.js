import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getGeneralInfo = async (userId) => {
  const result = (await axios.get(`${BASE_URL}/user/${userId}`)).data;
  // Transformer (s'il existe) <<todayScore>>  en <<score>>
  if (result.data.todayScore) {
    result.data.score = result.data.todayScore;
  }
  return result;
};

export const getActivity = async (userId) => {
  return (await axios.get(`${BASE_URL}/user/${userId}/activity`)).data;
};

export const getAverageSessions = async (userId) => {
  return (await axios.get(`${BASE_URL}/user/${userId}/average-sessions`)).data;
};

export const getPerformance = async (userId) => {
  return (await axios.get(`${BASE_URL}/user/${userId}/performance`)).data;
};
