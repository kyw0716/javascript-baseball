const Computer = require("../Computer");
const { readUserNumber, readRestartCommand } = require("../view/InputView");
const { Console } = require("@woowacourse/mission-utils");
const { generateRandomNumber } = require("../utils/RandomNumberGenerator");
const {
  printStartString,
  printHintString,
  printEndString,
} = require("../view/OutputView");
const { numberSize } = require("../constants/Constants");

class BaseballGameController {
  #computer;

  constructor(size) {
    this.#computer = new Computer(generateRandomNumber(size));
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

    if (strikeCount === numberSize) {
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
