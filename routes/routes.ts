import { Application, json, NextFunction } from "express";
import { routes } from "./routes.data";
import { Request, Response } from "express";


export const registerMiddlewares = (app: Application) => {
  app.use(json());

  for (let route of routes) {
    app.use(route.path, route.router);

  }

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).send({ error: err });
  })
};
