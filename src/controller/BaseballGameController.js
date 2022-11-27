const Computer = require("../Computer");
const { GuideString } = require("../constants/Constants");
const RandomNumberGenerator = require("../RandomNumberGenerator");
const { getUserInput } = require("../view/InputView");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class BaseballGameController {
  #computer;

  constructor(size) {
    this.#computer = new Computer(RandomNumberGenerator.generate(size));
  }

  startGame() {
    OutputView.printStartString();
    getUserInput();
  }

  inputUserNumber() {
    InputView.getUserInput(GuideString.INPUT_NUMBER, this.getHint.bind(this));
  }

  getHint(userNumber) {
    const userNumberArray = userNumber.split("");
    const strikeCount = this.#computer.getStrikeCount(userNumberArray);
    const ballCount = this.#computer.getBallCount(userNumberArray, strikeCount);

    return [strikeCount, ballCount];
  }
  resetGame() {
    this.#computer.reset();

    this.inputUserNumber();
  }
}

module.exports = BaseballGameController;
