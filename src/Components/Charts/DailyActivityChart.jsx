import {
  BarChart,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

export default function DailyActivityChart({ userActivity }) {
  const legendFormatter = (value) => {
    if (value === "kilogram") return "Poids (en Kg)";
    if (value === "calories") return "Calories brûlées (kCal)";

    return value;
  };

  return (
    <div className="dailyActivityChart">
      <BarChart
        width={730}
        height={250}
        data={userActivity.map((elt, idx) => ({
          ...elt,
          index: idx + 1,
        }))}
        barSize={7}
        barGap={4}
        barCategoryGap={3}
      >
        <Legend verticalAlign="top" align="right" formatter={legendFormatter} />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="kilogram" fill="#000000" width="5px" />
        <Bar dataKey="calories" fill="#FF0000" width="5px" />
      </BarChart>
    </div>
  );
}
