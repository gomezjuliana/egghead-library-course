import { expect } from "chai";
import names from "./index";

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
    it("should return an array of random items if passed a number", function() {
      var randomItems = names.random(3);
      expect(randomItems).to.have.lengthOf(3);
      randomItems.forEach(function(item) {
        expect(names.all).to.include(item);
      });
    });
  });
});
