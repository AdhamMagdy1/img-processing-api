import express from "express";
import * as path from "./../paths";
// image Query
interface ImageQuery {
  filename?: string;
  width?: string;
  height?: string;
}
/* VALIDATION*/

//function to validate querry that user passed

async function validate(params: ImageQuery) {
  // first check the filename
  if (!(await path.checkExist(params.filename))) {
    return "Error, Please use a valid image filename!";
  }
  //check width and height arguments
  const height = parseInt(params.height || "");
  const width = parseInt(params.width || "");
  if (!(params.width && params.height)) {
    return "Error, Please enter a width and height!";
  }

  if (Number.isNaN(height) || height < 1) {
    return "Error, Please enter a valid height!";
  }
  if (Number.isNaN(width) || width < 1) {
    return "Error, Please enter a valid width!";
  }
  return null;
}
//create image router

const img: express.Router = express.Router();
img.get("/", async (req: express.Request, res: express.Response) => {
  //validate the request
  const validationResponse: null | string = await validate(req.query);
  //send error message
  if (validationResponse) {
    res.send(validationResponse);
    return;
  }
  /*if there is no validation error message then procces image*/

  //check thumb created if not then process image and create thumb
  let errorExist: null | string = "";
  if (!(await path.checkThumb(req.query))) {
    errorExist = await path.createThumb(req.query);
  }
  //if error happen during image processing then return the error
  if (errorExist) {
    res.send(errorExist);
    return;
  }

  //send resized image
  const imagePath: null | string = await path.getImagePath(req.query);

  if (imagePath) {
    res.sendFile(imagePath);
  } else {
    res.send("Unknown Error");
  }
});

export default img;
