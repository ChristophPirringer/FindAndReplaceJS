describe('FindAndReplace', function() {

  it("replaces the word 'hello' with the word 'world' when only 'hello' is entered", function() {
   expect(FindAndReplace("hello", "hello", "world")).to.equal("world");
  });

  it("replaces the word 'hello' with the word 'world' when only 'hello' is entered three times", function() {
   expect(FindAndReplace("hello hello hello", "hello", "world")).to.equal("world world world");
  });

  it("replaces the word 'hello' with the word 'world' when 'hello is great' is entered", function() {
   expect(FindAndReplace("hello hello hello", "hello", "world")).to.equal("world world world");
  });

});
