import { useState, useEffect } from "react";

import RobotsTableHeader from "./RobotsTableHeader";
import RobotsTableBody from "./RobotsTableBody";
import FilterRobots from "./FilterRobots";

import getDataFromAPI from "./helpers/getRobotData";
import getSortedRobots from "./helpers/getSortedRobots";

// React component container for "Filter Robots", robot table header and robot table body
const RobotsTable = () => {
    const [robotData, setRobotData] = useState([]);
    const [robotFilter, setRobotFilter] = useState({visible: [], hidden: []});
    const [filteredRobotData, setFilteredRobotData] = useState([]);

    // sortOnColumn possible values: "robotId", "batteryLevel", "x", "y"
    const [sortOnColumn, setSortOnColumn] = useState("robotId");
    // sortDirection possible values: "ascending", "descending"
    const [sortDirection, setSortDirection] = useState("ascending");
    const [sortedToggle, setSortedToggle] = useState(true);

    const [updateSelectedBtn, setUpdateSelectedBtn] = useState(false);
    const [displayAllBtn, setDisplayAllBtn] = useState(false);

    // On first load, fetch API data and add isDisplayed: true to each robotData object
    useEffect(() => {
        const apiURL = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"
        getDataFromAPI(apiURL).then(response => {
            response.forEach(robot => robot["isDisplayed"] = true )
            setRobotData([...response])
            setFilteredRobotData([...response])
        })
    }, [])

    // Apply sorting to the filteredRobotData depending on column and direction sorted
    useEffect(() => {
        setFilteredRobotData(filteredRobotData => getSortedRobots(filteredRobotData, sortOnColumn, sortDirection));
        setSortedToggle(sortedToggle => !sortedToggle);
    }, [sortOnColumn, sortDirection])

    // Update filteredRobotData when the "Update Selected" button is clicked
    useEffect(() => {
        if (updateSelectedBtn) {
            let updatedDisplay = filteredRobotData.map(robot => {
                if (robotFilter.visible.includes(robot.robotId)) {
                    robot.isDisplayed = true;
                } else if (robotFilter.hidden.includes(robot.robotId)) {
                    robot.isDisplayed = false;
                }
                return robot
            })

            setFilteredRobotData(() => updatedDisplay.filter(robot => robot.isDisplayed))

            setUpdateSelectedBtn(false);
        }
    }, [updateSelectedBtn, filteredRobotData, robotFilter])

    // Display all robots when the "Display All" button is clicked
    useEffect(() => {
        if (displayAllBtn) {
            setRobotFilter(robotFilter => {
                let visible = [...robotFilter.visible, ...robotFilter.hidden];
                return {visible: visible, hidden: []}
            })
            setFilteredRobotData([...robotData])
            setDisplayAllBtn(false);
        }
    }, [displayAllBtn, robotData])

    // Update the robotFilter
    useEffect(() => {
        let visibleList = [];
        let hiddenList = [];

        filteredRobotData.forEach(robot => {
            if (robot.isDisplayed) {
                visibleList = [...visibleList, robot.robotId];
            } else {
                hiddenList = [...hiddenList, robot.robotId];
            }
        })

        setRobotFilter({visible: visibleList, hidden: hiddenList});
    }, [filteredRobotData])

    return (
        <>
            <FilterRobots 
                setUpdateSelectedBtn={setUpdateSelectedBtn} 
                setDisplayAllBtn={setDisplayAllBtn} 
                setFilteredRobotData={setFilteredRobotData}
                setRobotFilter={setRobotFilter}
            />
            <RobotsTableHeader 
                sortOnColumn={sortOnColumn} 
                setSortOnColumn={setSortOnColumn}
                sortDirection={sortDirection}
                setSortDirection={setSortDirection}
            />
            <RobotsTableBody 
                filteredRobotData={filteredRobotData} 
                sortedToggle={sortedToggle} 
                setRobotFilter={setRobotFilter}
            />
        </>
    )
}

export default RobotsTable;