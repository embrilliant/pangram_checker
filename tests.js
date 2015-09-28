QUnit.test( "Test for pangram object", function( assert ) {
    var newPangram = new Pangram();
    assert.ok( newPangram, "OK!" );
});

QUnit.test( "Test if showResult works", function( assert ) {
    var newPangram = new Pangram("dsfdsf");
    assert.ok( newPangram.showResult(), "Pass." );
});

QUnit.test( "Test if showResult shows something", function( assert ) {
    var newPangram = new Pangram("ddd");
    var something = newPangram.showResult();
    assert.ok( something, "Pass." );
});

QUnit.test( "Test if showResult shows some massage", function( assert ) {
    var newPangram = new Pangram("ddd");
    var something = newPangram.showResult().message;
    assert.ok( something === "Not a pangram.", "Pass." );
});

QUnit.test( "Test if showResult shows correct massage", function( assert ) {
    var newPangram = new Pangram("The Quick Brown Fox Jumps Over The Lazy Dog.");
    var something = newPangram.showResult().message;
    assert.strictEqual( something, "It's a pangram.", "Pass." );
});

QUnit.test( "Test if showResult shows correct massage", function( assert ) {
    var newPangram = new Pangram("Glib jocks quiz nymph to vex dwarf.");
    var something = newPangram.showResult().message;
    assert.strictEqual( something, "It's a pangram.", "Pass." );
});

QUnit.test( "Test if showResult shows unused letters", function( assert ) {
    var newPangram = new Pangram("Glib jocks qui nymph to vex dwar.");
    var something = newPangram.showResult().letters;
    assert.deepEqual( something, ["f", "z"], "Pass." );
});

QUnit.test( "Test if showResult shows unused letters", function( assert ) {
    var newPangram = new Pangram("Waltz job vexed quick frog nymphs.");
    var something = newPangram.showResult().letters;
    assert.deepEqual( something, [], "Pass." );
});

QUnit.test( "Test if showResult shows correct unused letters", function( assert ) {
    var newPangram = new Pangram("az");
    var something = newPangram.showResult().letters;
    assert.deepEqual( something, ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'], "Pass." );
});

QUnit.test( "Test if showResult shows correct unused letters", function( assert ) {
    var newPangram = new Pangram("abcdefghijklmnopqrstuvwxy");
    var something = newPangram.showResult().letters;
    assert.deepEqual( something, ['z'], "Pass." );
});

/*
 1. get user input value.
 2. convert user input to string
 - check if input is a string
 - remove special character
 - convert to array
 - remove duplicated item in the array
 3. compare the array with alphabet array
 4. show the letter that is not found in the alphabet string
 */

/*
WHAT I DID
1. create an object
2. write private functions for logic calculation
3. write tests for the method of final result
then write inner code of result method.
 */


