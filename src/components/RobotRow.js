const RobotRow = ({robotData}) => {
    return (
        <div className="flex-row">
            <div className="flex-row centered">
                {robotData.robotId}
            </div>
            <div className="flex-row centered">
                {robotData.batteryLevel}
            </div>
            <div className="flex-row centered">
                <div className="flex-row centered">
                    {robotData.x}
                </div>
                <div className="flex-row centered">
                    {robotData.y}
                </div>
            </div>

        </div>
    )
}

export default RobotRow;