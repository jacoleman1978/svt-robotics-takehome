/*
Inputs:
-idsToDisplay as user text in the form of "3-7, 10, 12-17"
Returns an array of robotIds as strings
*/
const convertFilterById = (idsToDisplay) => {
    let ids = [];

    const idRanges = idsToDisplay.split(",");

    idRanges.forEach((range) => {
        if (range.includes("-")) {
            let [start, end] = range.split("-");

            let startInt = parseInt(start.trim());
            let endInt = parseInt(end.trim());

            if (startInt < endInt) {
                for (let i = startInt; i <= endInt; i++) {
                    ids = [...ids, i.toString()];
                }
            } 
        } else {
            ids = [...ids, range.trim()];
        }
    })
    
    return ids
}

export default convertFilterById