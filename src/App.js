const BaseballGameController = require("./controller/BaseballGameController");

class App {
  #baseballGame = new BaseballGameController(3);

  constructor() {}

  play() {
    this.#baseballGame.startGame();
  }
}

module.exports = App;
