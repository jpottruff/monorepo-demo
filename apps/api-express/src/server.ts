import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
app.use(express.json());

app.get("/", (req: Request, res: Response, _next: NextFunction) => {
  res.json({ message: "Hello from the Express API! ...with typescript" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
