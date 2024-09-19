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
import { CustomTooltipActivity } from "../customs";

export default function DailyActivityChart({ userActivity }) {
  // Ajouter un index de jour pour chaque entrée de données
  const data = userActivity.map((elt, idx) => ({
    ...elt,
    dayIndex: idx + 1, // Les jours sont indexés de 1 à 7
  }));

  // Propriétés communes pour les barres
  const commonBarProps = {
    barSize: 7,
    barGap: 4,
    barCategoryGap: 3,
  };

  return (
    <div className="dailyActivityChart">
      <h3> Activité quotidienne </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} {...commonBarProps}>
          {/* Positionne la légende en haut à droite */}
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ marginTop: "-23px" }}
          />
          {/* Grille du graphique en pointillé sans lignes verticales */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* Axe X montrant les jours indexés */}
          <XAxis
            dataKey="dayIndex"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "rgba(155, 158, 172, 1)" }}
          />

          {/* Premier axe Y à droite pour le poids */}
          <YAxis
            yAxisId="left"
            tickLine={false}
            axisLine={false}
            orientation="right"
            domain={["dataMin - 1", "dataMax + 1"]}
            tick={{ fill: "rgba(155, 158, 172, 1)" }}
          />

          {/* Deuxième axe Y (caché) pour les calories */}
          <YAxis
            yAxisId="right"
            tickLine={false}
            axisLine={false}
            orientation="right"
            hide
          />

          {/* Personnalisation de l'affichage des données dans l'infobulle */}
          <Tooltip content={<CustomTooltipActivity />} />

          {/* Barres pour le poids */}
          <Bar
            name={<span style={{ color: "#74798C" }}>Poids (kg)</span>}
            dataKey="kilogram"
            radius={[10, 10, 0, 0]}
            fill="#282D30"
            yAxisId="left"
          />

          {/* Barres pour les calories brûlées */}
          <Bar
            name={
              <span style={{ color: "#74798C" }}>Calories brûlées (kCal)</span>
            }
            dataKey="calories"
            radius={[10, 10, 0, 0]}
            fill="#E60000"
            yAxisId="right"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
