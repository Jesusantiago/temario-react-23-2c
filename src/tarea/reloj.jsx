import React, { useState } from "react";

const Reloj = () => {

    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const upDateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time);
    }

    setInterval(upDateTime,1000)

    return (
        <div>
            <h1>{currentTime}</h1>
        </div>
    )
}

export default Reloj;
