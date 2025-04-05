import { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
      try {
          const response = await fetch('http://localhost:3000/api/tasks');
          if (!response.ok) {
              throw new Error('Failed to fetch tasks');
            }
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const showTask = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch task');
            }
            const data = await response.json();
            setTasks([data]);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    
    const addTask = async (task) => {
        try {
            const response = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });
            if (!response.ok) {
                throw new Error('Failed to add task');
            }
            const data = await response.json();
            setTasks([...tasks, data]);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const updateTask = async (updatedTask) => {
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/update/${updatedTask.id}`, {
                method: 'PUT',
                headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
    });
    if (!response.ok) {
        throw new Error('Failed to update task');
    }
    const data = await response.json();
    setTasks(tasks.map((task) => (task.id === data.id ? data : task)));
} catch (error) {
    console.error('Error:', error);
}
};
const deleteTask = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/delete/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
        setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
        console.error('Error:', error);
    }
};

useEffect(() => {
  fetchTasks();
}, []);

  return (
    <TaskContext.Provider value={{ tasks, showTask, addTask, updateTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};
