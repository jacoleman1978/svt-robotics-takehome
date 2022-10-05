import { useState, useEffect } from "react";
import RobotsTableHeader from "./RobotsTableHeader";
import RobotsTableBody from "./RobotsTableBody";
import getDataFromAPI from "./helpers/getRobotData";
import getSortedRobots from "./helpers/getSortedRobots";

const RobotsTable = () => {
    const [robotData, setRobotData] = useState([]);
    // sortOnColumn possible values: "robotId", "batteryLevel", "x", "y"
    const [sortOnColumn, setSortOnColumn] = useState("robotId");
    // sortDirection possible values: "ascending", "descending"
    const [sortDirection, setSortDirection] = useState("ascending");
    const [sortedToggle, setSortedToggle] = useState(true);

    const apiURL = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"

    useEffect(() => {
        getDataFromAPI(apiURL).then(response => setRobotData(response))
    }, [])

    useEffect(() => {
        setRobotData(robotData => getSortedRobots(robotData, sortOnColumn, sortDirection));
        setSortedToggle(sortedToggle => !sortedToggle);
    }, [sortOnColumn, sortDirection])

    return (
        <>
            <RobotsTableHeader 
                sortOnColumn={sortOnColumn} 
                setSortOnColumn={setSortOnColumn}
                sortDirection={sortDirection}
                setSortDirection={setSortDirection}
            />
            <RobotsTableBody robotData={robotData} sortedToggle={sortedToggle} />
        </>
    )
}

export default RobotsTable;