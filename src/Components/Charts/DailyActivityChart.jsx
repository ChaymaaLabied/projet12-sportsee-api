import {
  BarChart,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";
import "../../style/Charts/dailyActivityChart.scss";
import { CustomTooltipActivity } from "../custums";

export default function DailyActivityChart({ userActivity }) {
  const legendFormatter = (value) => {
    if (value === "kilogram") return "Poids (en Kg)";
    if (value === "calories") return "Calories brûlées (kCal)";
    return value;
  };

  // Transform data to include a new field `dayIndex`
  const data = userActivity.map((elt, idx) => ({
    ...elt,
    dayIndex: idx + 1, // Indexing from 1 to 7
  }));

  return (
    <div className="dailyActivityChart">
      <h3> Activité quotidienne </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          barSize={7}
          barGap={4}
          barCategoryGap={3}
        >
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ marginTop: "-23px" }}
            formatter={legendFormatter}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="dayIndex" // Use the new `dayIndex` key
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`} // Ensure the ticks are formatted as numbers
          />
          <YAxis
            yAxisId="left"
            tickLine={false}
            axisLine={false}
            orientation="right" // Set the axis to be on the right
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <YAxis
            yAxisId="right"
            tickLine={false}
            axisLine={false}
            orientation="right"
            hide
          />
          <Tooltip content={<CustomTooltipActivity />} />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            radius={[10, 10, 0, 0]}
            fill="#282D30"
            yAxisId="left" // Bind to the right-side Y-axis
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            radius={[10, 10, 0, 0]}
            fill="#E60000"
            yAxisId="right" // Bind to the right-side Y-axis
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

