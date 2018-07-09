var expect = require("chai").expect;
var names = require("./index");

describe("egghead-library-course", function() {
  describe("all", function() {
    it("should be an array of strings", function() {
      expect(names.all).to.satisfy(isArrayofStrings);

      function isArrayofStrings(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });
    it("should contain `Luke Skywalker`", function() {
      expect(names.all).to.include("Luke Skywalker");
    });
  });
  describe("random", function() {
    it("should return a random item from the names.all", function() {
      var randomItem = names.random();
      expect(names.all).to.include(randomItem);
    });
  });
});
