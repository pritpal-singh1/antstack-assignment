import express from "express";
import { registerMiddlewares } from "./routes/routes";

export const startserver = async () => {
  try {
    const app = express();
    const PORT = 3000;

    registerMiddlewares(app);
    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`);
    });

  } catch (error) {
    console.log('SOMETHING WENT WRONG');
    process.exit(1);

  }
};
