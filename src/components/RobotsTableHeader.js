const RobotsTableHeader = () => {
    return (
        <div className="flex-row bottom-center">
            <div className="flex-row centered med-border-top-bottom-left">
                Robot Id
            </div>
            <div className="flex-row centered med-border-top-bottom-left">
                Battery %
            </div>
            <div className="flex-col med-border">
                <div className="flex-row centered med-border-bottom">Coordinates</div>
                <div className="flex-row centered">
                    <div className="flex-row centered med-border-right">
                        X
                    </div>
                    <div className="flex-row centered">
                        Y
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RobotsTableHeader;