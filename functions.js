/*jshint esversion: 6 */
function SnakesLadders() {
  this.player1 = 0;
  this.player2 = 0;
  this.movers = {};
  this.movers[2] = 38;
  this.movers[7] = 14;
  this.movers[15] = 26;
  this.movers[16] = 6;
  this.movers[21] = 42;
  this.movers[28] = 84;
  this.movers[36] = 44;
  this.movers[46] = 25;
  this.movers[49] = 11;
  this.movers[51] = 67;
  this.movers[62] = 19;
  this.movers[64] = 60;
  this.movers[71] = 91;
  this.movers[74] = 53;
  this.movers[78] = 98;
  this.movers[87] = 94;
  this.movers[92] = 88;
  this.movers[95] = 75;
  this.movers[99] = 80;
}

roll = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let die1 = 0;
let die2 = 0;
let turn = 0;

var game = new SnakesLadders();

while (game.player1 < 100 && game.player2 < 100) {
  play(1);
  play(2);
}
console.log(game.player1 === 100 ? 'Player1 is the winner!' : 'Player2 is the winner!');


function play(player) {
  let doubles = true;
  while (doubles) {
    turn++;
    die1 = roll(7, 0);
    die2 = roll(7, 0);
    doubles = die1 === die2 ? true : false;
    if (player === 1) {
      game.player1 = adjust(game.player1, die1 + die2);
    } else {
      game.player2 = adjust(game.player2, die1 + die2);
    }
    let name = "player" + player;
    console.log('Turn ', turn, ' - die1:', die1, ', die2:', die2, ', Player 1:', game.player1, ', Player2:', game.player2);
  }
}

function adjust(start, moves) {
  newPos = start + moves;
  newPos = game.movers[newPos] ? game.movers[newPos] : newPos;
  if (newPos > 100) {
    newPos = 100 - (newPos - 100);
  }
  return newPos;
}

// SnakesLadders.prototype.play = function(die1, die2) {

// };

/*
var game = new SnakesLadders();
Test.expect(game.play(1, 1)=="Player 1 is on square 38", "Should return: 'Player 1 is on square 38'");
Test.expect(game.play(1, 5)=="Player 1 is on square 44", "Should return: 'Player 1 is on square 44'");
Test.expect(game.play(6, 2)=="Player 2 is on square 31", "Should return: 'Player 2 is on square 31'");
Test.expect(game.play(1, 1)=="Player 1 is on square 25", "Should return: 'Player 1 is on square 25'");
*/
