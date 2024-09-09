import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis, Radar,
  RadarChart
} from "recharts";

export default function ActivityChart({userPerformance}) {
 

  
  return (
    <div
    className="col w-25"
    style={{ backgroundColor: "#282D30" }}
   >
    {userPerformance && (
      <RadarChart
        width={250}
        height={250}
        data={userPerformance.data.map((elt) => ({
          ...elt,
          kind: userPerformance.kinds[elt.kind],
        }))}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" color="#000000" />
        <PolarRadiusAxis angle={30} domain={[0, 200]} />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    )}
  </div>
  );
}
