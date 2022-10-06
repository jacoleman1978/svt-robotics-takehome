import { useState, useEffect } from "react";
import RobotsTableHeader from "./RobotsTableHeader";
import RobotsTableBody from "./RobotsTableBody";
import FilterByRobotIdBtns from "./FilterByRobotIdBtns";
import getDataFromAPI from "./helpers/getRobotData";
import getSortedRobots from "./helpers/getSortedRobots";

const RobotsTable = () => {
    const [robotData, setRobotData] = useState([]);
    // sortOnColumn possible values: "robotId", "batteryLevel", "x", "y"
    const [sortOnColumn, setSortOnColumn] = useState("robotId");
    // sortDirection possible values: "ascending", "descending"
    const [sortDirection, setSortDirection] = useState("ascending");
    const [sortedToggle, setSortedToggle] = useState(true);
    const [removeUnselectedBtn, setRemoveUnselectedBtn] = useState(false);
    const [displayAllBtn, setDisplayAllBtn] = useState(false);
    const [robotFilter, setRobotFilter] = useState({visible: [], hidden: []});
    const [filteredRobotData, setFilteredRobotData] = useState([]);

    const apiURL = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"

    useEffect(() => {
        getDataFromAPI(apiURL).then(response => {
            response.forEach(robot => robot["isDisplayed"] = true )
            setRobotData(response)
            setFilteredRobotData(response)
        })
    }, [])

    useEffect(() => {
        setFilteredRobotData(filteredRobotData => getSortedRobots(filteredRobotData, sortOnColumn, sortDirection));
        setSortedToggle(sortedToggle => !sortedToggle);
    }, [sortOnColumn, sortDirection])

    useEffect(() => {
        if (removeUnselectedBtn) {
            let updatedDisplay = filteredRobotData.map(robot => {
                if (robotFilter.visible.includes(robot.robotId)) {
                    robot.isDisplayed = true;
                } else if (robotFilter.hidden.includes(robot.robotId)) {
                    robot.isDisplayed = false;
                }
                return robot
            })

            setFilteredRobotData(() => updatedDisplay.filter(robot => robot.isDisplayed))

            setRemoveUnselectedBtn(false);
        }
    }, [removeUnselectedBtn, filteredRobotData, robotFilter])

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

        setRobotFilter({visible: visibleList, hidden: hiddenList})
    }, [filteredRobotData])

    return (
        <>
            <FilterByRobotIdBtns 
                setRemoveUnselectedBtn={setRemoveUnselectedBtn} 
                setDisplayAllBtn={setDisplayAllBtn} 
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