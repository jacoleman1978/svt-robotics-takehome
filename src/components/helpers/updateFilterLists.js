/*
Inputs:
-robotFilter is an object {hidden:[], visible:[]} where both arrays in the object hold robotIds
-listAddingTo is the property array that the passed in robotId will be added to
Output: returns an updated robotFilter where robotId was added to the designated property array and removed from the other one
*/
const updateFilterLists = (robotFilter, listAddingTo, robotId) => {
    let hiddenList = robotFilter.hidden;
    let visibleList = robotFilter.visible;

    if (listAddingTo === "visible") {
        if (visibleList.includes(robotId) === false) {
            visibleList = [...visibleList, robotId];
        }
        let updatedHiddenList = hiddenList.filter((id) => id !== robotId);
        hiddenList = [...updatedHiddenList]

    } else if (listAddingTo === "hidden") {
        if (hiddenList.includes(robotId) === false) {
            hiddenList = [...hiddenList, robotId];
        }
        let updatedVisibleList = visibleList.filter((id) => id !== robotId);
        visibleList = [...updatedVisibleList]
    }

    return {hidden: hiddenList, visible: visibleList}

}

export default updateFilterLists;