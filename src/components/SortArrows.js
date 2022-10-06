import { useMemo } from "react";

import getSortArrowClasses from "./helpers/getSortArrowClasses";

// Pairs up and down arrows for sorting, and sets the type and direction for sorting
const SortArrows = ({type, sortOnColumn, setSortOnColumn, sortDirection, setSortDirection}) => {
    // Adds a colored background for the active arrow used for sorting and removes all other arrow background color
    const {classStringUp, classStringDown} = useMemo(() => getSortArrowClasses(type, sortOnColumn, sortDirection), [type, sortOnColumn, sortDirection]);

    const handleClickDown = (type) => {
        setSortOnColumn(type);
        setSortDirection("ascending");
    }

    const handleClickUp = (type) => {
        setSortOnColumn(type);
        setSortDirection("descending");
    }

    return (
        <div className="flex-row-centered sm-padding-left">
            <button onClick={() => handleClickDown(type)} className={classStringDown}><i className="fa-solid fa-arrow-down-long"></i></button>
            <button onClick={() => handleClickUp(type)}  className={classStringUp}><i className="fa-solid fa-arrow-up-long"></i></button>
        </div>
    )
}

export default SortArrows;