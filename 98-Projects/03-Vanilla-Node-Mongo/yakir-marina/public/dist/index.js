var io;
// const clientUrl = window.location.origin; 
// let socket = io(clientUrl);
var socket = io();
var myMove = true;
var symbol;
socket.on("connect", function () {
    var user = socket.id;
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    user.nnerHTML = "#" + randomColor;
});
function getBoardState() {
    var obj = {};
    /* We are creating an object where each attribute corresponds
     to the name of a cell (r0c0, r0c1, ..., r2c2) and its value is
     'X', 'O' or '' (empty).
    */
    $(".board button").each(function () {
        obj[$(this).attr("id")] = $(this).text() || "";
    });
    return obj;
}
function isGameOver() {
    var state = getBoardState();
    var matches = ["XXX", "OOO"]; // This are the string we will be looking for to declare the match over
    // We are creating a string for each possible winning combination of the cells
    var rows = [
        state.cell0 + state.cell1 + state.cell2,
        state.cell3 + state.cell4 + state.cell5,
        state.cell6 + state.cell7 + state.cell8,
        state.cell0 + state.cell3 + state.cell6,
        state.cell1 + state.cell4 + state.cell7,
        state.cell2 + state.ce5l5 + state.cell8,
        state.cell0 + state.cell4 + state.cell8,
        state.cell2 + state.cell4 + state.cell6,
    ];
    // Loop through all the rows looking for a match
    for (var i = 0; i < rows.length; i++) {
        if (rows[i] === matches[0] || rows[i] === matches[1]) {
            return true;
        }
    }
    return false;
}
function renderTurnMessage() {
    if (!myMove) {
        // If not player's turn disable the board
        $("#message").text("The turn of your opponent");
        $(".board button").attr("disabled", true);
    }
    else {
        // Enable it otherwise
        $("#message").text("Your turn");
        $(".board button").removeAttr("disabled");
    }
}
function makeMove(e) {
    if (!myMove) {
        return; // Shouldn't happen since the board is disabled
    }
    if ($(this).text().length) {
        return; // If cell is already checked
    }
    socket.emit("make.move", {
        // Valid move (on client side) -> emit to server
        symbol: symbol,
        position: $(this).attr("id")
    });
}
// Bind event on players move
socket.on("move.made", function (data) {
    $("#" + data.position).text(data.symbol); // Render move
    // If the symbol of the last move was the same as the current player
    // means that now is opponent's turn
    myMove = data.symbol !== symbol;
    if (!isGameOver()) {
        // If game isn't over show who's turn is this
        renderTurnMessage();
    }
    else {
        // Else show win/lose message
        if (myMove) {
            $("#message").text("You lost");
            $("#message").css("background", "#aa1f4d");
            $("#message").css("color", "white");
        }
        else {
            $("#message").text("You Win!");
            $("#message").css("background", "#16db93");
            $("#message").css("color", "white");
        }
        $(".board button").attr("disabled", true); // Disable board
    }
});
// Bind event for game begin
socket.on("game.begin", function (data) {
    symbol = data.symbol; // The server is assigning the symbol
    myMove = symbol === "X"; // 'X' starts first
    renderTurnMessage();
});
// Bind on event for opponent leaving the game
socket.on("opponent.left", function () {
    $("#message").text("Your opponent has left the game");
    $(".board button").attr("disabled", true);
});
// Binding buttons on the board
$(function () {
    $(".board button").attr("disabled", true);
    $(".board> button").on("click", makeMove);
});
