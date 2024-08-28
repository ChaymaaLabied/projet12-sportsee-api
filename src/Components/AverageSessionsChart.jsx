import { useEffect, useState } from "react";
import { getAverageSessions } from "../Api/server";
import {
  LineChart,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";

export default function AverageSessionsChart() {
  const [userAverageSessions, setUserAverageSessions] = useState([]);

  useEffect(() => {
    getAverageSessions(18).then((result) => {
      setUserAverageSessions(result.data.sessions);
    });
  }, []);
  return (
    <div className="col">
      <LineChart
        width={350}
        height={250}
        data={userAverageSessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
