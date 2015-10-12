function Pangram( userInput ) {

    var userInput = userInput;

    function convertInputToArray( input ) {

        var stringLowerCased;
        var specialCharacterRemove;
        var userArray;
        var uniqueLetterArray = [];

        if ( typeof input === "string" ) {

            stringLowerCased = input.toLowerCase();
            specialCharacterRemove = stringLowerCased.replace(/[^a-zA-Z ]/g, "");
            userArray = specialCharacterRemove.split("");

            $.each(userArray, function(index, itemValue){
                if($.inArray(itemValue, uniqueLetterArray) === -1) {
                    uniqueLetterArray.push(itemValue);
                }
            });

        } else {

            console.log("Not a string.");
            return false;
        }

        return uniqueLetterArray;
    }

    var lettersNotUsed = [];

    function compareAlphabet( somethingToCompare ) {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        $.each(alphabet, function(index, itemValue){
            if($.inArray(itemValue, somethingToCompare) === -1) {
                lettersNotUsed.push(itemValue);
            }
        });

    }

    this.showResult = function() {
        var resultMsg;
        var userArray = convertInputToArray( userInput );
        compareAlphabet( userArray );

        if ( lettersNotUsed.length > 0 ) {
            resultMsg = "Not a pangram.";
            //console.log(lettersNotUsed);
        } else {
            resultMsg = "It's a pangram.";
            //console.log(lettersNotUsed);
        }

        return {
                message: resultMsg,
                letters: lettersNotUsed
                };

    };

}