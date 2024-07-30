import express from "express";

const app = express();

app.all("*", (req, res, next) => {
  res.status(404).json({
    message: "this route is not exist",
  });
});

export default app;
