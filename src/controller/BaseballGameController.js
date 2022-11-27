const Computer = require("../Computer");
const { GuideString } = require("../constants/Constants");
const { getUserInput } = require("../view/InputView");
const { Console } = require("@woowacourse/mission-utils");
const RandomNumberGenerator = require("../RandomNumberGenerator");
const { printStartString, printHintString } = require("../view/OutputView");

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
    getUserInput(GuideString.INPUT_NUMBER, this.scoringUserNumber.bind(this));
  }

  scoringUserNumber(userNumber) {
    const userNumberArray = userNumber.split("").map((v) => Number(v));
    const strikeCount = this.#computer.getStrikeCount(userNumberArray);
    const ballCount = this.#computer.getBallCount(userNumberArray, strikeCount);

    return this.handleInputOrEnd(strikeCount, ballCount);
  }

  handleInputOrEnd(strikeCount, ballCount) {
    if (strikeCount === 3) return this.inputRestartCommand();
    return this.printHint(strikeCount, ballCount);
  }

  inputRestartCommand() {
    getUserInput(GuideString.RESTART, (input) => {
      if (input === "1") {
        this.resetGame();
        return this.inputUserNumber();
      }
      if (input === "2") return Console.close();
    });
  }

  printHint(strikeCount, ballCount) {
    printHintString(strikeCount, ballCount);

    this.inputUserNumber();
  }

  resetGame() {
    this.#computer.reset();

    this.inputUserNumber();
  }
}

module.exports = BaseballGameController;

new BaseballGameController(3).startGame();
