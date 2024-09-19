import {
  LineChart,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import "../../style/Charts/averageSessionsChart.scss";
import { CustomTooltipLineChart } from "../customs";

export default function AverageSessionsChart({ userAverageSessions }) {
  // Tableau pour mapper les nombres 1 à 7 aux lettres des jours de la semaine
  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <div className="averageSessionsChart">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="LineChart-responsive"
      >
        <LineChart
          data={userAverageSessions} // Données à afficher dans le graphique
          margin={{ top: 10, right: 0, left: 5, bottom: 10 }} // Marges du graphique
          onMouseMove={(e) => {
            // Fonction pour mettre à jour l'arrière-plan du conteneur lors du mouvement de la souris
            const div = document.getElementsByClassName(
              "LineChart-responsive"
            )[0];
            if (e.isTooltipActive) {
              const windowWidth = div.clientWidth; // Largeur du conteneur
              const mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              ); // Pourcentage de la position x de la souris
              // Applique un dégradé de couleur en fonction de la position de la souris
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(230, 0, 0, 1) ${mouseXpercentage}%, rgba(230, 0, 0, 1) 100%)`;
            }
          }}
        >
          <XAxis
            dataKey="day" // Clé des données pour l'axe des X
            stroke="#FFFFFF" // Couleur des graduations de l'axe des X
            opacity={0.5} // Opacité des graduations
            tickLine={false} // Masque les lignes de graduation
            axisLine={false} // Masque la ligne de l'axe
            tickFormatter={(tick) => daysOfWeek[tick - 1]} // Remplacement des nombres par les lettres des jours
          />
          <YAxis
            padding={{ top: 70, bottom: 25 }} // Espacement au-dessus de l'axe des Y
            stroke="#FFFFFF" // Couleur des graduations de l'axe des Y
            opacity={0.5} // Opacité des graduations
            tickLine={false} // Masque les lignes de graduation
            axisLine={false} // Masque la ligne de l'axe
            hide // Cache l'axe des Y
          />
          <Tooltip content={<CustomTooltipLineChart />} />
          <Legend />
          <Line
            type="natural" // Type de courbe pour la ligne
            dataKey="sessionLength" // Clé des données pour la ligne
            stroke="#FFFFFF" // Couleur de la ligne
            dot={false} // Masque les points de données
            strokeWidth={2} // Épaisseur de la ligne
            legendType="none" // Masque la légende associée à la ligne
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
