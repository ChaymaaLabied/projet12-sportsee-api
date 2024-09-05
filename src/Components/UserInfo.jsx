import React, { useState, useEffect } from "react";
import { getGeneralInfo } from "../Api/server";

export default function UserInfo() {
  const [generaleInfos, setGeneraleInfos] = useState(null);

  useEffect(() => {
    getGeneralInfo(18)
      .then((result) => {
        setGeneraleInfos(result.data);
      })
      .catch((error) => {
        console.error("Error fetching general info:", error);
      });
  }, []); // Ajout de la dépendance vide pour n'exécuter qu'une seule fois

  if (!generaleInfos) {
    return <div>Loading...</div>; // Afficher un message de chargement tant que les données ne sont pas disponibles
  }

  return <h1>Bonjour {generaleInfos.userInfos.firstName}</h1>;
}
