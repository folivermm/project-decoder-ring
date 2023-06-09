const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "message";
      const actual = polybius(message);
      const expected = "23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "juggle";
      const actual = polybius(message);
      const expected = "425422221351";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "a message";
      const actual = polybius(message);
      const expected = "11 23513434112251";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "23513434112251";
      const actual = polybius(message, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "424222221351";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "11 23513434112251";
      const actual = polybius(message, false);
      const expected = "a message";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "2345 235134341122514";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
