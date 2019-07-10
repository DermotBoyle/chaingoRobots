const expect = require("chai").expect;
const request = require("supertest");
const server = require("../../app");

describe("POST /api", () => {
  it("OK, creating a new robo works", done => {
    request(server)
      .post("/api/robots")
      .send({ name: "Derek", type: "HackerBot" })
      .then(res => {
        console.log("POST /api/robots ... response received", res.status);
        const body = res.body;
        expect(body).to.contain.property("_id");
        expect(body).to.contain.property("type");
        expect(body).to.contain.property("name");
        done();
      })
      .catch(err => done(err));
  });
});
