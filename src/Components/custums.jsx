export const CustomTooltipObjectif = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip-objectif'>
          <p> {`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };
  
  // export const CustomizedTick = ({ x, y, value }) => {
  //   return (
  //     <text
  //       x={x}
  //       y={y + 10} // Ajustez la position verticale si nécessaire
  //       textAnchor="middle"
  //       fill="#FFFFFF"
  //       fontSize={10} // Réduit la taille de la police
  //       dy={10} // Ajuste le décalage vertical pour éviter les chevauchements
  //     >
  //       {value}
  //     </text>
  //   );
  // };
  
  // export function CustomLegendScore({ payload }) {
  //   if (!payload || !payload.length) {
  //     return null;
  //   }
  
  //   // Trouvez le score dans le payload
  //   const score = payload.find(item => item.dataKey === 'todayScore')?.value || 0;
  
  //   return (
  //     <div className='custom-legend-score'>
  //       <p className='custom-legend-score-score'>
  //         {score}%
  //       </p>
  //       <p className='custom-legend-score-objectif'> de votre objectif</p>
  //     </div>
  //   );
  // }
  export function CustomLegendScore (payload) {
    console.log(payload.payload)
    return (
      <div className='custom-legend-score'>
        <p className='custom-legend-score-score'>
          {payload?.payload[1]?.payload.todayScore}%
        </p>
        <p className='custom-legend-score-objectif'> de votre objectif</p>
      </div>
    )
  }  


  
  