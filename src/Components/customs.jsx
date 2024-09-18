export const CustomTooltipActivity = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-activity">
        <p> {`${payload[0].value}kg`}</p>
        <p> {`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

export const CustomTooltipLineChart = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-LineChart">
        <p> {`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

export function CustomLegendScore(payload) {
  return (
    <div className="custom-legend-score">
      <p className="custom-legend-score-score">
        {payload?.payload[1]?.payload.todayScore}%
      </p>
      <p className="custom-legend-score-objectif"> de votre objectif</p>
    </div>
  );
}
