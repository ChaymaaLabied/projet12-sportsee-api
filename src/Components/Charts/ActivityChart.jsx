import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  ResponsiveContainer,
  RadarChart,
  Legend
} from "recharts";
import "../../style/Charts/activityChart.scss"

export default function ActivityChart({ userPerformance }) {
  return (
    <div className="activityChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius="70%" // Ajuste la taille du radar pour éviter le débordement
          data={userPerformance.data.map((elt) => ({
            ...elt,
            kind: userPerformance.kinds[elt.kind],
          }))}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            fontSize={10}
            fontWeight={600}
            tickLine={false}
            className="polar-angle-axis"
          />
          <Radar
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.7}
            legendType="none"
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
