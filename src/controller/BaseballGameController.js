const Computer = require("../Computer");
const { readUserNumber, readRestartCommand } = require("../view/InputView");
const { Console } = require("@woowacourse/mission-utils");
const RandomNumberGenerator = require("../RandomNumberGenerator");
const {
  printStartString,
  printHintString,
  printEndString,
} = require("../view/OutputView");

class BaseballGameController {
  #computer;

  constructor(size) {
    this.#computer = new Computer(RandomNumberGenerator.generate(size));
  }

  startGame() {
    printStartString();

    this.inputUserNumber();
  }

  inputUserNumber() {
    readUserNumber((userNumber) => {
      const userNumberArray = userNumber.split("").map((v) => Number(v));
      const strikeCount = this.#computer.getStrikeCount(userNumberArray);
      const ballCount = this.#computer.getBallCount(
        userNumberArray,
        strikeCount
      );

      return this.handleInputOrEnd(strikeCount, ballCount);
    });
  }

  inputRestartCommand() {
    readRestartCommand((input) => {
      if (input === "1") {
        this.resetGame();
        return this.inputUserNumber();
      }
      if (input === "2") return Console.close();
    });
  }

  handleInputOrEnd(strikeCount, ballCount) {
    printHintString(strikeCount, ballCount);

    if (strikeCount === 3) {
      printEndString();
      return this.inputRestartCommand();
    }
    return this.inputUserNumber();
  }

  resetGame() {
    this.#computer.reset();

    this.inputUserNumber();
  }
}

module.exports = BaseballGameController;

new BaseballGameController(3).startGame();
