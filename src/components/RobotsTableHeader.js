import SortArrows from "./SortArrows";

// Robot data table headers, inclduding sorting arrows for each column
const RobotsTableHeader = (props) => {
    return (
        <div className="flex-row bottom-center">
            <div className="flex-row-condensed centered med-padding sm-font-size">Filter</div>
            <div className="flex-row centered med-border-top-bottom-left left-border-radius sm-font-size">
                Robot Id
                <SortArrows {...props} type={"robotId"} />
            </div>
            <div className="flex-row centered med-border-top-bottom-left sm-font-size">
                Battery %
                <SortArrows {...props} type={"batteryLevel"} />
            </div>
            <div className="flex-col med-border top-border-radius bottom-r-border-radius">
                <div className="flex-row centered med-border-bottom sm-font-size">Coordinates</div>
                <div className="flex-row centered">
                    <div className="flex-row centered med-border-right sm-font-size">
                        X
                        <SortArrows {...props} type="x" />
                    </div>
                    <div className="flex-row centered sm-font-size">
                        Y
                        <SortArrows {...props} type="y" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RobotsTableHeader;