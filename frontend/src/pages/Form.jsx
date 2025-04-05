import React from 'react';
import TaskForm from '../components/TaskForm';

const Form = () => {
    return (
        <div className="form container">
            <h1 className="mb-3">Crear tarea</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <TaskForm />
                </div>
            </div>
        </div>
    );
};

export default Form;
