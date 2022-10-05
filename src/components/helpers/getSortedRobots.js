import addPrecedingZeros from "./addPrecedingZeros"
/*
Input: 
    -robots is an array of individual robot objects
    -sortField are the fields in a robot object: "robotId", "batteryLevel", "x", "y"
    -sortDirection determines whether the data will be sorted in an "ascending" or "descending" order
Output: returns an array of robot objects sorted on the passed in field in the passed in direction
*/
const getSortedRobots = (robots, sortField, sortDirection) => {
    robots.sort((robot1, robot2) => {
        let robot1Formatted = robot1[sortField];
        let robot2Formatted = robot2[sortField];

        // If the sortField is a string, format it with leading zeros to compare a string of numeric characters
        if (typeof robot1Formatted === "string") {
            robot1Formatted = addPrecedingZeros(robot1Formatted, 6);
            robot2Formatted = addPrecedingZeros(robot2Formatted, 6);
        }
        
        // 1 gives priority of robot1 over robot2, -1 priortizes robot2 over robot1
        if (sortDirection === "ascending" && robot1Formatted > robot2Formatted) {
            return 1

        } else if (sortDirection === "descending" && robot1Formatted < robot2Formatted) {
            return 1

        } else {
            return -1
        }
    })

    return robots
}

export default getSortedRobots