import sharp from "sharp";

//define Query inputs
interface imageQuery {
  imgSource: string;
  target: string;
  height: number;
  width: number;
}
// function to resize image using sharp functions
async function resize(params: imageQuery) {
  try {
    await sharp(params.imgSource) //use image source
      .resize(params.width, params.height) // use given width and height want to resize to
      .toFormat("jpeg") // the image format
      .toFile(params.target); // the path to save the resized image
    return null;
  } catch (error) {
    console.log(error);
    return "Error";
  }
}

export default resize;
