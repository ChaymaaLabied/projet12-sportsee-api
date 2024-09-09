import { RadialBarChart, RadialBar } from "recharts";

export default function ScoreChart({ score }) {
  return (
    <div>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="60%"
        outerRadius="80%"
        data={score}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          background
          clockWise={true}
          width="5px"
          dataKey="uv"
          isAnimationActive={true}
        />
      </RadialBarChart>
    </div>
  );
}
