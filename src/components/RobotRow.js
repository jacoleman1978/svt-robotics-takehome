import { Form } from "react-bootstrap"

import updateFilterLists from "./helpers/updateFilterLists"

// For individual robot objects, displays a filter switch and values for each column
const RobotRow = ({filteredRobotData, setRobotFilter, rowNum}) => {
    // Maintains the robotFilter object, based on the state of the switch
    const handleFilterSwitch = (e) => {
        if (e.target.checked) {
            setRobotFilter(robotFilter => updateFilterLists(robotFilter, "visible", filteredRobotData.robotId));
        } else {
            setRobotFilter(robotFilter => updateFilterLists(robotFilter, "hidden", filteredRobotData.robotId));
        }
    }


    return (
        <div key={filteredRobotData.robotId} className={(rowNum + 1) % 5 == 0 ? "flex-row table-divider" : "flex-row"}>
            <Form.Check 
                className="flex-row-condensed centered xlg-padding-left"
                type="switch"
                id={filteredRobotData.robotId}
                defaultChecked={filteredRobotData.isDisplayed}
                onChange={handleFilterSwitch}
            />
            <div className="flex-row centered">
                {filteredRobotData.robotId}
            </div>
            <div className="flex-row centered">
                {filteredRobotData.batteryLevel}
            </div>
            <div className="flex-row centered">
                <div className="flex-row centered">
                    {filteredRobotData.x}
                </div>
                <div className="flex-row centered">
                    {filteredRobotData.y}
                </div>
            </div>
            
        </div>
    )
}

export default RobotRow;