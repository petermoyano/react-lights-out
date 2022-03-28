import React from "react";

const chanceLightStartsOn = () => {
    const lightOn = Math.floor((Math.random() * 100));
    if(lightOn > 50){
        return true
    }
    return false
}

export default chanceLightStartsOn;
