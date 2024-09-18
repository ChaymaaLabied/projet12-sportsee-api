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

export function CustomLegendScore({ payload }) {
  // Vérification que le payload contient les données nécessaires
  // Utilise l'opérateur d'accès optionnel (?.) pour éviter les erreurs si une partie des données est manquante
  // Utilise ?? pour définir une valeur par défaut de 0 si todayScore est undefined ou null
  const todayScore = payload?.[1]?.payload?.todayScore ?? 0;

  return (
    <div className="custom-legend-score">
      <p className="custom-legend-score-score">
        {todayScore}% 
      </p>
      <p className="custom-legend-score-objectif">
        de votre objectif 
      </p>
    </div>
  );
}

