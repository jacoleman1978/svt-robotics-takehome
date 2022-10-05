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