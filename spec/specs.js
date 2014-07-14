describe("scrabble", function() {
  it("takes a letter and returns a number value", function() {
    scrabble("c").should.equal(3);
  });
  it("takes a word and returns a number value", function()  {
    scrabble("yoga").should.equal(8);
  });
});
