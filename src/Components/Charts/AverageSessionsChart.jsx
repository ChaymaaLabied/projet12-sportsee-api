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
import { CustomTooltipObjectif , } from "../customs";


export default function AverageSessionsChart({ userAverageSessions }) {
  // Tableau pour mapper les nombres 1 à 7 aux lettres des jours de la semaine
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <div className="averageSessionsChart">
      <h3> Durée moyenne des sessions </h3>
      <ResponsiveContainer width='100%' height='100%' className='objectif-responsive'>
        <LineChart
          className='objectif-line'
          width='50%' height='50%' data={userAverageSessions}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          onMouseMove={(e) => {
            const div = document.getElementsByClassName('objectif-responsive')[0];
            if (e.isTooltipActive) {
              const windowWidth = div.clientWidth;
              const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
            }
          }}
        >
          {/* Utilisation du tableau pour afficher les jours en lettres */}
          <XAxis
            dataKey='day'
            stroke='#FFFFFF'
            opacity={0.5}
            tickLine={false}
            axisLine={false}
            tickFormatter={(tick) => daysOfWeek[tick - 1]} // Remplacement des nombres par les lettres
          />
          <YAxis padding={{ top: 50 }} stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} hide />
          <Tooltip content={<CustomTooltipObjectif />} />
          <Legend />
          <Line type='basis' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2} legendType='none' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
