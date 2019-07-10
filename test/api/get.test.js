const expect = require("chai").expect;
const request = require("supertest");
const server = require("../../app");

//is able to fetch robot data

describe("GET /api", () => {
  it("OK, fetching robots works", done => {
    request(server)
      .get("/api/robots")
      .then(res => {
        console.log(res, res.status);
        const body = res.body;
        expect(body[0]).to.contain.property("type");
        done();
      })
      .catch(err => done(err));
  });
});
