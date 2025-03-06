import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from the Express API! ...with typescript" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
