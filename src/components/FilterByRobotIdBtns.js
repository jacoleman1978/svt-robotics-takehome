import { Button } from "react-bootstrap";

const FilterByRobotIdBtns = ({setRemoveUnselectedBtn, setDisplayAllBtn}) => {

    return (
        <div>
            <Button variant="danger" onClick={() => setRemoveUnselectedBtn(true)}>
                Remove Unselected
            </Button>

            <Button variant="success" onClick={() => setDisplayAllBtn(true)}>
                Display All
            </Button>
        </div>
    )
}

export default FilterByRobotIdBtns;