import { Form } from "react-bootstrap"
import updateFilterLists from "./helpers/updateFilterLists"

const RobotRow = ({filteredRobotData, setRobotFilter}) => {
    const handleFilterSwitch = (e) => {
        if (e.target.checked) {
            setRobotFilter(robotFilter => updateFilterLists(robotFilter, "visible", filteredRobotData.robotId));
        } else {
            setRobotFilter(robotFilter => updateFilterLists(robotFilter, "hidden", filteredRobotData.robotId));
        }
    }
    return (
        <div className="flex-row">
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