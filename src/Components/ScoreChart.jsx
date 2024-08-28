import { useEffect, useState } from "react";
import { getGeneralInfo } from "../Api/server";
import {
 RadialBarChart,RadialBar
} from "recharts";

export default function ScoreChart() {
//     const [generaleInfos, setGeneraleInfos] = useState(null);
    const [score, setScore] = useState([]);

  useEffect(() => {
    getGeneralInfo(12).then((result) => {
        // setGeneraleInfos(result.data);
        setScore([
          {
            name: "",
            uv: 100,
            fill: "#ffffff",
          },
          {
            name: "Score",
            uv: result.data.score * 100,
            fill: "#ff0000",
          },
        ]);
      });
  } , []);
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
