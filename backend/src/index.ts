import experss from "express";
import cors from "cors";
import {appTasksRouter} from "./routes/task.routes";

const app = experss();

app.use(cors());
app.use(experss.json());

app.use('/api/tasks', appTasksRouter);

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));