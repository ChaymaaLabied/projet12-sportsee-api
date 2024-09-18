import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from "recharts";
import { CustomLegendScore } from "../customs"; 
import "../../style/Charts/scoreChart.scss"; 

export default function ScoreChart({ score }) {
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
          <Legend content={<CustomLegendScore />} /> 
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
