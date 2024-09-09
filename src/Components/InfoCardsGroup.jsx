import React from "react";
import InfoCard from "./InfoCard";


export default function InfoCardsGroup({generaleInfos}){

    const getKeyDataLabel = (entry) => {
        switch (entry[0]) {
          case "calorieCount":
            return "Calories";
          case "proteinCount":
            return "Protéines";
          case "carbohydrateCount":
            return "Glucides";
          case "lipidCount":
            return "Lipides";
          default:
            return "";
        }
      };
    // les unité du compo precedent juste avant celui la 
      const getKeyDataUnit = (entry) => {
        if (entry[0] === "calorieCount") return "kCal";
        return "g";
      };
      
      return(
        <div className="col-4">
        {generaleInfos && (
          <>
            {Object.entries(generaleInfos.keyData).map((entry) => (
              <InfoCard
                label={getKeyDataLabel(entry)}
                value={entry[1]}
                unit={getKeyDataUnit(entry)}
              />
            ))}
          </>
        )}
      </div>
      )
}