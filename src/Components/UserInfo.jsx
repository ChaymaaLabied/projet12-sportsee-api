import React from "react";
import { useState,useEffect } from "react";
import { getGeneralInfo } from "../Api/server";


export default function UserInfo(){

    const [generaleInfos, setGeneraleInfos] = useState(null);
    useEffect(()=>{
        getGeneralInfo(12).then((result) => {
            setGeneraleInfos(result.data);
          });
    })
return(
    <div>
        <h2>Bonjour {generaleInfos.userInfos.firstName}</h2>
    </div>
)
}