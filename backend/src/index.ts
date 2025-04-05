import experss from "express";
import cors from "cors";
import {router} from "./routes/task.routes";

const app = experss();

app.use(cors());
app.use(experss.json());

app.use(router);

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));