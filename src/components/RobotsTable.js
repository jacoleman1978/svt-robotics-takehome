import { useState, useEffect } from "react";
import RobotsTableHeader from "./RobotsTableHeader";
import RobotsTableBody from "./RobotsTableBody";
import getDataFromAPI from "./helpers/getRobotData";

const RobotsTable = () => {
    const [robotData, setRobotData] = useState([]);
    const apiURL = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"

    useEffect(() => {
        getDataFromAPI(apiURL).then(response => setRobotData(response))
    }, [])

    return (
        <>
            <RobotsTableHeader />
            <RobotsTableBody robotData={robotData} />
        </>
    )
}

export default RobotsTable;