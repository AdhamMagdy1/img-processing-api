import { promises as fs } from "fs";
import path from "path";
import * as File from "./../paths";

describe("Test  sharp ", (): void => {
  it("resize with valied input(filename,width,height)", async (): Promise<void> => {
    await File.createThumb({
      filename: "palmtunnel",
      width: "250",
      height: "250",
    });

    const resizedImagePath: string = path.resolve(
      File.imageThumbPath,
      // eslint-disable-next-line quotes
      `palmtunnel-250x250.jpg`
    );
    let errorFile: null | string = "";

    try {
      await fs.access(resizedImagePath);
      errorFile = null;
    } catch {
      errorFile = "File not created";
    }

    expect(errorFile).toBeNull();
  });
  it("resize with invailed width value", async (): Promise<void> => {
    const error: null | string = await File.createThumb({
      filename: "random",
      width: "-300",
      height: "300",
    });
    expect(error).not.toBeNull();
  });
  it("resize with invailed height value", async (): Promise<void> => {
    const error: null | string = await File.createThumb({
      filename: "random",
      width: "300",
      height: "-300",
    });
    expect(error).not.toBeNull();
  });

  it("resize with invailed filename", async (): Promise<void> => {
    const error: null | string = await File.createThumb({
      filename: "random",
      width: "100",
      height: "500",
    });
    expect(error).not.toBeNull();
  });
});
