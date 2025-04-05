import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
    const { showTask, updateTask, deleteTask } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);
    const [newDescription, setNewDescription] = useState(task.description);
    const [isCompleted, setIsCompleted] = useState(task.completed);

    const handleShow = () => showTask(task.id);
    const { title, description } = task;
    const handleUpdate = () => {
        if (newTitle.trim() && newDescription.trim()) {
            updateTask({ ...task, title: newTitle, description: newDescription, completed: isCompleted });
            setIsEditing(false);
        }
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" >
            <div>
                <h2 className="card-title">{task.title}</h2>
                <p className="card-text">{task.description}</p>
                <p>Completada: {task.completed ? 'Si' : 'No'}</p>
                <p>Creada en fecha: {task.createdAt.toLocaleString()}</p>
                {isEditing ? (
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">T tulo</label>
                            <input type="text" className="form-control" id="title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Descripci n</label>
                            <input type="text" className="form-control" id="description" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                        </div>
                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="checkbox" checked={isCompleted} onChange={e => setIsCompleted(e.target.checked)} id="completed" />
                            <label className="form-check-label" htmlFor="completed">Completada?</label>
                        </div>
                        <button type="submit" className="btn btn-success">Guardar</button>
                        <button type="button" className="btn btn-danger" onClick={() => setIsEditing(false)}>Cancelar</button>
                    </form>
                ) : (
                    <>
                        <button className="btn btn-warning" onClick={() => setIsEditing(true)}>Editar</button>
                        <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Borrar</button>
                    </>
                )}
            </div>
        </li>
    );
};

export default TaskItem;

