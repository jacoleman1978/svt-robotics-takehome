import { useState, useEffect } from "react";
import RobotRow from "./RobotRow";

const RobotsTableBody = ({robotData, sortedToggle}) => {
    const [rowDisplay, setRowDisplay] = useState([]);

    useEffect(() => {
        const newDisplay = robotData.map((robot) => {
            return (
                <RobotRow key={robot.robotId} robotData={robot} />
            )
        })
        setRowDisplay(newDisplay);
    }, [robotData, sortedToggle])

    return (
        <div className="flex-col xs-padding">
            {rowDisplay}
        </div>
    )
}

export default RobotsTableBody;