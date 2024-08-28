import React from "react";
import InfoCard from "./InfoCard";
import { getGeneralInfo } from "../Api/server";
import { useState, useEffect } from "react";

export default function InfoCardsGroup(){
    const [generaleInfos, setGeneraleInfos] = useState(null);
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
      useEffect(()=>{
        getGeneralInfo(12).then((result) => {
            setGeneraleInfos(result.data);
          });
      })
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