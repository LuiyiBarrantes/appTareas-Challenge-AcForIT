import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
            <label htmlFor="title" className="form-label">
                Título:
                <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            </div>
            <div className="mb-3">
            <label htmlFor="description" className="form-label">
                Descripción:
                <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            </div>
            <button type="submit" className="btn btn-primary">Agregar tarea</button>
        </form>
    );
};

export default TaskForm;
