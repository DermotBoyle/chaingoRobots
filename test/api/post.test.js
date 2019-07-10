const expect = require("chai").expect;
const request = require("supertest");
const server = require("../../app");

describe("POST /api", () => {
  it("OK, creating a new robo works", done => {
    request(server)
      .post("/api/robots")
      .send({ name: "Derek", type: "HackerBot" })
      .then(res => {
        const body = res.body;
        expect(body).to.contain.property("_id");
        expect(body).to.contain.property("type");
        expect(body).to.contain.property("name");
        done();
      })
      .catch(err => done(err));
  });
});

//negative test => requires robot to have a type.

it("Fail, Robot requires type", done => {
  request(server)
    .post("/api/robots")
    .send({ name: "HackerBot" })
    .then(res => {
      const body = res.body;
      expect(body.error).to.equal(
        "robotchaingo validation failed: type: All robots need a type"
      );
      done();
    })
    .catch(err => done(err));
});

// requires robot to have a name
it("Fail, Robot requires type", done => {
  request(server)
    .post("/api/robots")
    .send({ type: "HackerBot" })
    .then(res => {
      const body = res.body;
      expect(body.error).to.equal(
        "robotchaingo validation failed: name: All robots need a name"
      );
      done();
    })
    .catch(err => done(err));
});
