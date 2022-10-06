import { useState, useEffect } from "react";
import RobotRow from "./RobotRow";

const RobotsTableBody = ({filteredRobotData, sortedToggle, setRobotFilter}) => {
    const [rowDisplay, setRowDisplay] = useState([]);
    
    useEffect(() => {
        const newDisplay = filteredRobotData.map((robot) => {
            return (
                <RobotRow key={robot.robotId} filteredRobotData={robot} setRobotFilter={setRobotFilter} />
            )
        })
        setRowDisplay(newDisplay);
    }, [filteredRobotData, sortedToggle, setRobotFilter])

    return (
        <div className="flex-col xs-padding">
            {rowDisplay}
        </div>
    )
}

export default RobotsTableBody;