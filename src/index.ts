import express, { Request, Response } from "express";
import producerRouter from "./producer";
import {consumerFun} from "./consumer";

const app = express();
const PORT = 3000;

app.use(express.json());
consumerFun();
app.use("/send", producerRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running 🚀");
});



app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    message: "Server working fine",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});