import { useMemo } from "react";
import getSortArrowClasses from "./helpers/getSortArrowClasses";

const SortArrows = ({type, sortOnColumn, setSortOnColumn, sortDirection, setSortDirection}) => {
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
        <div className="flex-row-centered">
            <button onClick={() => handleClickDown(type)} className={classStringDown}><i className="fa-solid fa-arrow-down-long"></i></button>
            <button onClick={() => handleClickUp(type)}  className={classStringUp}><i className="fa-solid fa-arrow-up-long"></i></button>
        </div>
    )
}

export default SortArrows;