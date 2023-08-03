import express from "express";
import routes from "./routes/index";

const app: express.Application = express();
const PORT = 3000; // Default port

// Add routes
app.use(routes);

// Start server
app.listen(PORT, async (): Promise<void> => {
  const url = `http://localhost:${PORT}`;
  console.log(`server runing on port: ${PORT} ,url: ${url}`);
});

export default app;
