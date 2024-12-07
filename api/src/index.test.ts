import request from "supertest";
import {server, app} from "./index";

afterAll((done) => {
  server.close(done); 
});

describe("GET /", () => {
  it("should return 200 OK and 'Hello World!'", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});
