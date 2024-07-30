import app from "./app.js";
import { AppDataSource } from "./data-source.js";
AppDataSource.initialize().then(() => {
  const port = process.env.PORT || 8000;
  app.listen(port, () =>
    console.log(`the server is running on http://localhost:${port}`)
  );
});
