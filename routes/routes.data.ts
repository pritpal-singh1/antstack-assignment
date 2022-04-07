import { IRoute } from "./routes.types";

import UrlInfoRouter from "../url-info/url-info.route";

export const routes: IRoute[] = [

  {
    path: "/url-info",
    router: UrlInfoRouter,
  },

];
