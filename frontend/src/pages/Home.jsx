import React from 'react';
import TaskList from '../components/TaskList';


const Home = () => {
    return (
        <div className="container">
            <h1 className="display-4 text-center mt-5">Lista de tareas</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <TaskList />
                </div>
            </div>
        </div>
    );
};

export default Home;

