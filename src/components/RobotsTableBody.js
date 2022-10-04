import RobotRow from "./RobotRow";

const RobotsTableBody = ({robotData}) => {
    const rowDisplay = robotData.map((robot) => {
        return (
            <RobotRow key={robot.robotId} robotData={robot} />
        )
    })

    return (
        <div className="flex-col xs-padding">
            {rowDisplay}
        </div>
    )
}

export default RobotsTableBody;