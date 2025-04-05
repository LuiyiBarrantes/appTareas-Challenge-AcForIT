import { Request, Response } from 'express';
import { tasks } from '../data/tasks';
import { Task } from '../models/task.model';

// Get all tasks
export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

// Get a single task by ID
export const getTask = (req: Request, res: Response) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
};

// Create a new task
export const createTask = (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTask: Task = {
    id: (tasks.length + 1).toString(),
    title: title,
    description: description,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Update an existing task
export const updateTask = (req: Request, res: Response) => {
    const { title, description, completed } = req.body;
    const task = tasks.find(t => t.id === req.params.id);
  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
};

// Delete a task
export const deleteTask = (req: Request, res: Response) => {
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Task not found');
  }
};

