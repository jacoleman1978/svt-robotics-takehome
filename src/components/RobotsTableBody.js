import { useState, useEffect } from "react";

import RobotRow from "./RobotRow";

// Displays rows for each robot in the filteredRobotData array
const RobotsTableBody = ({filteredRobotData, sortedToggle, setRobotFilter}) => {
    const [rowDisplay, setRowDisplay] = useState([]);
    
    useEffect(() => {
        const newDisplay = filteredRobotData.map((robot, i) => {
            return (
                <RobotRow key={robot.robotId} filteredRobotData={robot} setRobotFilter={setRobotFilter} rowNum={i}/>
            )
        })
        setRowDisplay(newDisplay);
    }, [filteredRobotData, sortedToggle, setRobotFilter])

    return (
        <div className={rowDisplay.length > 0 ? "flex-col xs-padding" : "flex-row centered xlg-padding bold-red-text"}>
            {rowDisplay.length > 0 ? rowDisplay : <div className="row-flex">No Matching Robots Found</div>}
        </div>
    )
}

export default RobotsTableBody;