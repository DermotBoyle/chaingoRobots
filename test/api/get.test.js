const expect = require("chai").expect;
const request = require("supertest");
const server = require("../../app");

//is able to fetch robot data

describe("GET /api", () => {
  it("Fetching robots", done => {
    request(server)
      .get("/api/robots")
      .then(res => {
        console.log("GET /api/robots", res.status, res.body);
        const body = res.body;
        expect(body instanceof Array).to.equal(true);
        expect(body[0]).to.contain.property("type");
        done();
      })
      .catch(err => done(err));
  });
});
