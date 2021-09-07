import Express from "express";
import router from "./routes";

const app = Express()
const port = 3000

app.use('/', router)

app.listen(port)