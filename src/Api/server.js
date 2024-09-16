import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const serverFetch = (isMock) => {
  const findUser = (userId) => (user) => user.userId === parseInt(userId);

  if (isMock) {
    return {
      getGeneralInfo: async (userId) => {
        const response = await fetch("/mocks/userInfoMock.json");
        const result = await response.json();
        const user = result.find(findUser(userId));
        if (user && user.todayScore) {
          user.score = user.todayScore;
        }
        
        return { data: user };
      },
      getActivity: async (userId) => {
        const response = await fetch("/mocks/userActivitiesMock.json");
        const result = await response.json();
        const user = result.find(findUser(userId));
        
        return { data: user };
      },
      getAverageSessions: async (userId) => {
        const response = await fetch("/mocks/userAverageSessionsMock.json"); // Chemin corrigé
        const result = await response.json();
        const user = result.find(findUser(userId));
        
        return { data: user };
      },
      getPerformance: async (userId) => {
        const response = await fetch("/mocks/userPerformanceMock.json");
        const result = await response.json();
        const user = result.find(findUser(userId));
        
        return { data: user };
      },
    };
  }

  // API Calls (When isMock is false)
  return {
    getGeneralInfo: async (userId) => {
      const result = (await axios.get(`${BASE_URL}/user/${userId}`)).data;
      if (result.data.todayScore) {
        result.data.score = result.data.todayScore;
      }
      return result;
    },
    getActivity: async (userId) => {
      return (await axios.get(`${BASE_URL}/user/${userId}/activity`)).data;
    },
    getAverageSessions: async (userId) => {
      return (await axios.get(`${BASE_URL}/user/${userId}/average-sessions`)).data;
    },
    getPerformance: async (userId) => {
      return (await axios.get(`${BASE_URL}/user/${userId}/performance`)).data;
    },
  };
};

