import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from "recharts";
import { CustomLegendScore } from "../customs"; // Assurez-vous que le chemin est correct
import "../../style/Charts/scoreChart.scss";

export default function ScoreChart({ score }) {
  return (
    <div className="scoreChart">
      <h3> Score </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={140}
          endAngle={500}
          cx="50%"
          cy="50%"
          innerRadius={70}
          barSize={10}
          outerRadius={120}
          data={score}
        >
          <RadialBar
            cornerRadius="50%"
            dataKey="todayScore" // Assurez-vous que le dataKey correspond à vos données
            fill="#E60000"
          />
          <Legend content={<CustomLegendScore />} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
