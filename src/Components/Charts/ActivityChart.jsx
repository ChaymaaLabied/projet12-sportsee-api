import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  ResponsiveContainer,
  RadarChart,
  Legend,
} from "recharts";
import "../../style/Charts/activityChart.scss";

export default function ActivityChart({ userPerformance }) {
  return (
    <div className="activityChart">
      {/* Conteneur réactif pour ajuster le graphique à la taille du conteneur parent */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius="60%" // Ajuste la taille du radar par rapport au conteneur
          data={userPerformance.data.map((elt) => ({
            // Mappe chaque donnée avec sa description 'kind'
            ...elt,
            kind: userPerformance.kinds[elt.kind],
          }))}
        >
          {/* Grille du radar sans lignes radiales */}
          <PolarGrid radialLines={false} />

          {/* Axe des angles représentant les types d'activités */}
          <PolarAngleAxis
            dataKey="kind" // Utilise 'kind' pour nommer chaque angle du radar
            stroke="#FFFFFF" // Couleur du texte
            fontWeight={600} // Épaisseur du texte
            tickLine={false} // Supprime la ligne de tick
            className="polar-angle-axis"
          />

          {/* Zone radar qui montre les performances */}
          <Radar
            dataKey="value" // Utilise 'value' pour tracer la performance
            stroke="#E60000" // Couleur de la ligne extérieure
            fill="#E60000" // Couleur de remplissage de la zone
            fillOpacity={0.7} // Opacité du remplissage
            legendType="none" // Supprime l'icône dans la légende
          />

          {/* Légende qui accompagne le graphique */}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
