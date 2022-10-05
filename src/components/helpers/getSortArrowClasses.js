/*
Input: 
-type and sortOnColumn have values of "robotId", "batteryLevel", "x", "y"
-sortDirection has values of "ascending", "descending"
Output:
-returns an object with the string to use for classes, depending on whether the up and down arrows are active or inactive based on inputs
*/
const getSortArrowClasses = (type, sortOnColumn, sortDirection) => {
    let activeSort = "no-padding-left-right no-border active-sort";
    let inactiveSort = "no-padding-left-right no-border inactive-sort";

    if (type === sortOnColumn) {
        if (sortDirection === "ascending") {
            return {classStringUp: inactiveSort, classStringDown: activeSort}
        } else if (sortDirection === "descending") {
            return {classStringUp: activeSort, classStringDown: inactiveSort}
        }
    } else {
        return {classStringUp: inactiveSort, classStringDown: inactiveSort}
    }
}

export default getSortArrowClasses;