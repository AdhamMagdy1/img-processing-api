import supertest from "supertest";
import app from "../index";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe("Test endpoints response", (): void => {
  describe("endpoint: /", (): void => {
    it("gets /", async (): Promise<void> => {
      const response: supertest.Response = await request.get("/");

      expect(response.status).toBe(200);
    });
  });

  describe("endpoint: /api/images", (): void => {
    it("gets /api/images ", async (): Promise<void> => {
      const response: supertest.Response = await request.get("/api/images");

      expect(response.status).toBe(200);
    });
    it("gets /api/images?filename=palmtunnel ", async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        "/api/images?filename=palmtunnel"
      );

      expect(response.status).toBe(200);
    });

    it("gets /api/images?filename=palmtunnel&width=150&height=150 ", async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        "/api/images?filename=palmtunnel&width=150&height=150"
      );

      expect(response.status).toBe(200);
    });

    it("gets /api/images?filename=palmtunnel&width=-350&height=350 ", async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        "/api/images?filename=palmtunnel&width=-350&height=350"
      );

      expect(response.status).toBe(200);
    });
  });

  describe("endpoint: /random", (): void => {
    it("returns error 404 for invalid endpoint", async (): Promise<void> => {
      const response: supertest.Response = await request.get("/random");

      expect(response.status).toBe(404);
    });
  });
});
