import { Router, Request, Response } from 'express';
import {getTasks, getTask, createTask, updateTask, deleteTask} from '../controllers/task.controller';

const appTasksRouter = Router();

appTasksRouter.get('/', (req: Request, res: Response) => {
    res.send('Benvenido a la  API de Tareas');
});
appTasksRouter.get('/all', getTasks)
.get('/:id', getTask);
appTasksRouter.post('/', createTask);
appTasksRouter.put('/update/:id', updateTask);
appTasksRouter.delete('/delete/:id', deleteTask);

export { appTasksRouter };

