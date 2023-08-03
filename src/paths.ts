import { promises as fs } from "fs";
import path from "path";
import resize from "./resize";

//construct path to image original folder and thumb folder

export const imageOriginalPath = path.resolve(
  __dirname,
  "../assets/images/original"
);
export const imageThumbPath = path.resolve(__dirname, "../assets/images/thumb");
//image Query
interface ImageQuery {
  filename?: string;
  width?: string;
  height?: string;
}

// function to check image exist or not using filename
export async function checkExist(filename?: string) {
  //build image thumb file path
  const imgFilePath: string = path.resolve(
    imageOriginalPath,
    `${filename}.jpg`
  );
  //check if the thumb path exist
  try {
    await fs.access(imgFilePath);
    return true;
  } catch (error) {
    return false;
  }
}

// function to check if the image was cashed in thumb file or not

export async function checkThumb(params: ImageQuery) {
  // create path to check
  const thumbPath: string = path.resolve(
    imageThumbPath,
    `${params.filename}-${params.width}x${params.height}.jpg`
  );

  try {
    await fs.access(thumbPath);
    return true; // thumb exist
  } catch {
    return false; // dont exist
  }
}

// function to create the thumb image and retrun the image resized
export async function createThumb(params: ImageQuery) {
  if (!params.filename || !params.width || !params.height) {
    return null; // missing arrguments cant create thumb image
  } else {
    //create target thumb image path
    const imgTargetPath: string = path.resolve(
      imageThumbPath,
      `${params.filename}-${params.width}x${params.height}.jpg`
    );
    //create imge Original path
    const imgOriginalPath: string = path.resolve(
      imageOriginalPath,
      `${params.filename}.jpg`
    );
    //resize Image using resizeImg function
    return await resize({
      imgSource: imgOriginalPath,
      target: imgTargetPath,
      width: parseInt(params.width),
      height: parseInt(params.height),
    });
  }
}
// function to retrun the image path after validate that its exist
export async function getImagePath(params: ImageQuery) {
  const imgPath: string = path.resolve(
    imageThumbPath,
    `${params.filename}-${params.width}x${params.height}.jpg`
  );
  return imgPath;
}
