describe('FindAndReplace', function() {

  it("replaces the word 'hello' with the word 'world' when only 'hello' is entered", function() {
   expect(FindAndReplace("hello", "hello", "world")).to.equal("world");
  });

  it("replaces the word 'hello' with the word 'world' when only 'hello' is entered three times", function() {
   expect(FindAndReplace("hello hello hello", "hello", "world")).to.equal("world world world");
  });

  it("replaces the word 'hello' with the word 'world' when 'hello is great' is entered", function() {
   expect(FindAndReplace("hello is great", "hello", "world")).to.equal("world is great");
  });

  it("replaces the word 'hello' with the word 'world' and clears it of special characters when ' hello is great!' is entered", function() {
   expect(FindAndReplace('"hello" is great!', "hello", "world")).to.equal('world is great');
  });

  it("downcases the entered string so that 'HELLO iS GrEAT' will be output as 'world is great'", function() {
   expect(FindAndReplace('"HELLO iS GrEAT', "hello", "world")).to.equal('world is great');
  });


});
