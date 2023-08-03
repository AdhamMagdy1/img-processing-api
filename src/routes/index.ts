import express from "express";
import img from "./images";

const routes: express.Router = express.Router();

routes.use("/api/images", img);

routes.get(
  "/",
  (request: express.Request, response: express.Response): void => {
    response.send(
      '<h1 style="text-align:center;"> Image-Processing-Api</h1><p style="text-align:center;font-size:24px;">Welcome to image-processing-api<br/>you can resize image by passing filename ,width and height<br/> Example:</p><ul><li><a href="/api/images?filename=palmtunnel&width=500&height=500">/api/images?filename=palmtunnel&width=500&height=500</a></li></ul>'
    );
  }
);

export default routes;
