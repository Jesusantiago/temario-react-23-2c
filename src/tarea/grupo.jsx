import React, {useState} from "react";

const Tarea = () => {
    const [position, setPosition] = useState(1);

    const increment = (i) => {
        i + 1
        if( i == 6){
            return i = 0
        }
    }

    const group = {
        1: "Jesus Santiago",
        2: "Magdalena Zucal",
        3: "Pamela Acuña",
        4: "Johnatan Bedoya",
        5: "Federico Dominguez"
    }

    const handlePrevName = () => {
        (position > 1) ? setPosition(position - 1) : setPosition(5)
    }

    const handleNextName = () => {
        (position < 5) ? setPosition(position + 1) : setPosition(1)
    }

    return (
        <div class="participant">
            <h1 class="title">LATINOAMERICA UNIDA</h1>
            <button onClick={handlePrevName}>&#60;</button>
            <h1>{group[position]}</h1>
            <button onClick={handleNextName}>&#62;</button>
        </div>
    )
}

export default Tarea;