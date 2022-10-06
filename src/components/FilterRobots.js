import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import convertFilterById from "./helpers/convertFilterById";
import updateFilterLists from "./helpers/updateFilterLists";

// React component container for "Robot Ids:" text input filter field, "Remove Unselected" button and "Display All" button
const FilterRobots = ({setRemoveUnselectedBtn, setDisplayAllBtn, setFilteredRobotData, setRobotFilter}) => {
    const [idsToDisplay, setIdsToDisplay] = useState("");

    // Updates the filteredRobotData array using the "Robot Ids:" field after the "Display" button is clicked
    const handleFilterById = (idsToDisplay) => {
        const ids = convertFilterById(idsToDisplay);

        setFilteredRobotData(filteredRobotData => {
            const updatedDisplayed = filteredRobotData.filter((robot) => {
                if (ids.includes(robot.robotId)) {
                    robot.isDisplayed = true;
                    setRobotFilter(robotFilter => updateFilterLists(robotFilter, "visible", robot.robotId));
                } else {
                    robot.isDisplayed = false;
                    setRobotFilter(robotFilter => updateFilterLists(robotFilter, "hidden", robot.robotId));
                }
                return robot.isDisplayed
            })

            return updatedDisplayed
        })
    }

    return (
        <div className="flex-row centered sm-gap wrap med-border med-padding margin-bottom sm-border-radius">
            <div className="flex-row title">Filter Robots</div>
            <div className="flex-row centered sm-gap med-padding">
                <Form.Label className="flex-left-bold" >Robot Ids: </Form.Label>
                <Form.Control type="text" placeholder="3-7, 10, 14-21" onChange={(e) => {setIdsToDisplay(e.target.value)}}/>
                <Button onClick={() => handleFilterById(idsToDisplay)}>Display</Button>
            </div>

            <div className="flex-row centered sm-gap">
                <Button variant="danger" onClick={() => setRemoveUnselectedBtn(true)}>
                    Remove Unselected
                </Button>

                <Button variant="success" onClick={() => setDisplayAllBtn(true)}>
                    Display All
                </Button>
            </div>
        </div>
    )
}

export default FilterRobots;