import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import "../../style/Charts/scoreChart.scss";

export default function ScoreChart({ score }) {
  const renderLegend = ({ payload }) => {
    const todayScore = payload?.[1]?.payload?.todayScore ?? 0;
    return (
      <div className="custom-legend-score">
        <p className="custom-legend-score-score">{todayScore}%</p>
        <p className="custom-legend-score-objectif">de votre objectif</p>
      </div>
    );
  };
  return (
    <div className="scoreChart">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={90} // Angle de départ
          endAngle={500} // Angle de fin
          cx="50%" // Position X du centre du graphique
          cy="50%" // Position Y du centre du graphique
          innerRadius="50%" // Rayon interne du graphique
          barSize={8}
          outerRadius="200%" // Rayon externe du graphique
          data={score}
        >
          <RadialBar
            cornerRadius="50%" // Coins arrondis des barres
            dataKey="todayScore" // Clé des données à afficher
            fill="#E60000" // Couleur de remplissage des barres
          />
          <Legend content={renderLegend} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
