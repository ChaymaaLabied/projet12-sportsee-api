import React from "react";
import InfoCard from "./InfoCard";
// Importation des icônes
import calorieIcon from "../assets/calorie.svg";
import glucideIcon from "../assets/glucide.svg";
import proteineIcon from "../assets/proteine.svg";
import lipideIcon from "../assets/lipide.svg";

export default function InfoCardsGroup({ generaleInfos }) {

  // Fonction pour mapper les labels, icônes et unités
  const getKeyDataDetails = (entry) => {
    switch (entry[0]) {
      case "calorieCount":
        return { label: "Calories", icon: calorieIcon, unit: "kCal" };
      case "proteinCount":
        return { label: "Proteines", icon: proteineIcon, unit: "g" };
      case "carbohydrateCount":
        return { label: "Glucides", icon: glucideIcon, unit: "g" };
      case "lipidCount":
        return { label: "Lipides", icon: lipideIcon, unit: "g" };
      default:
        return { label: "", icon: null, unit: "" };
    }
  };

  return (
    <>
      {generaleInfos && (
        <>
          {Object.entries(generaleInfos.keyData).map((entry) => {
            const { label, icon, unit } = getKeyDataDetails(entry);
            return (
              <InfoCard
                key={entry[0]} // Ajoutez une clé pour chaque élément
                label={label}
                value={entry[1]}
                unit={unit}
                icon={icon} // Passez l'icône en tant que prop
              />
            );
          })}
        </>
      )}
    </>
  );
}
