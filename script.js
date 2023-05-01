$( document ).ready(function() {
    
    generateText();

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_close = $("#close");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
        setTimeout(function(){generateText();}, 1000);
    });
    btn_close.click(function() {
        window.location.href='#';
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});

const quotes = ["Your direction,Is more important,Than your speed",
                "Feel the fear,And do it anyway",
                "Perfectly,Imperfect",
                "Be creative,And Have Fun",
                "Don't be,The same,Be better",
                "Dare to be,Different",
                "Be Scared,And Do It,Anyway!",
                "You don't have,To be perfect,To be amazing"];

function generateText() {
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        };
    
    let index = getRandomInt(quotes.length - 1);
    
    let tmp = quotes[index];
    
    let quote = tmp.split(",")
    
    if (quote.length == 3) {
        document.getElementById("line1").innerHTML = quote[0];
        document.getElementById("line2").innerHTML = quote[1];
        document.getElementById("line3").innerHTML = quote[2];
    } else if(quote.length == 2) {
        document.getElementById("line1").innerHTML = quote[0];
        document.getElementById("line2").innerHTML = quote[1];
    } else {
        alert("Please Refresh");
    };
}