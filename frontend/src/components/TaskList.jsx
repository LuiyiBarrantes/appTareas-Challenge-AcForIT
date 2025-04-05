import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    return (
        <ul className="list-group" style={{width: "100%"}}>{tasks.map((task) => <TaskItem key={task.id} task={task} />)}</ul>
    );
};

export default TaskList