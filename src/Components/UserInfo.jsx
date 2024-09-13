import React from "react";

export default function UserInfo({ generaleInfos }) {
  if (!generaleInfos) {
    return <div>Loading...</div>; // Afficher un message de chargement tant que les données ne sont pas disponibles
  }

  return (
    <h1>
      Bonjour{" "}
      <span className="userName" style={{ color: "red" }}>
        {generaleInfos.userInfos.firstName}
      </span>
    </h1>
  );
}
