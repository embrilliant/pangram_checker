$(function() {

    var alphabetUI = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    function checkPangram() {

        var userVal = $("input").val();
        var newPangram = new Pangram(userVal);
        var result = newPangram.showResult();
        var resultArray = result.letters;
        var resultMessage = result.message;

        $("#alphabet").children().removeClass("highlight");

        resultArray.forEach(function(value) {
            $("#alphabet").find("#" + value).addClass("highlight");
        });

        $("#resultMsg").text( resultMessage );

        console.log( resultArray );
    }

    $("button").on("click", function(e) {
        e.preventDefault();
        checkPangram();
    });

    for(var i = 0; i < alphabetUI.length; i++) {
        $("#alphabet").append( $("<p></p>").attr("id", alphabetUI[i]).text(alphabetUI[i]) )
    }

});