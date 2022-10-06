import SortArrows from "./SortArrows";

const RobotsTableHeader = (props) => {
    return (
        <div className="flex-row bottom-center">
            <div className="flex-row-condensed centered med-padding">Filter</div>
            <div className="flex-row centered med-border-top-bottom-left sm-gap">
                Robot Id
                <SortArrows {...props} type={"robotId"} />
            </div>
            <div className="flex-row centered med-border-top-bottom-left sm-gap">
                Battery %
                <SortArrows {...props} type={"batteryLevel"} />
            </div>
            <div className="flex-col med-border">
                <div className="flex-row centered med-border-bottom">Coordinates</div>
                <div className="flex-row centered">
                    <div className="flex-row centered med-border-right sm-gap">
                        X
                        <SortArrows {...props} type="x" />
                    </div>
                    <div className="flex-row centered sm-gap">
                        Y
                        <SortArrows {...props} type="y" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RobotsTableHeader;