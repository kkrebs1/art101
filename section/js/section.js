//set a blank page

function choose_color() {
    //something to type in color name
    var ask_color = window.prompt("What color?");
    console.log(ask_color);
    //change the page color according to user input
    $("BODY").css("background-color", ask_color);
    return ask_color;
}

$("button").click(choose_color);


