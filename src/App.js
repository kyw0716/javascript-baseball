const { numberSize } = require("./constants/Constants");
const BaseballGameController = require("./controller/BaseballGameController");

class App {
  #baseballGame = new BaseballGameController(numberSize);

  constructor() {}

  play() {
    this.#baseballGame.startGame();
  }
}

module.exports = App;
