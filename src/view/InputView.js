const { Console } = require("@woowacourse/mission-utils");
const {
  GuideString,
  ErrorString,
  numberSize,
} = require("../constants/Constants");

const InputView = {
  readUserNumber(callback) {
    Console.readLine(GuideString.INPUT_NUMBER, (input) => {
      InputView.validateUserNumber(input);
      callback(input);
    });
  },

  readRestartCommand(callback) {
    Console.readLine(GuideString.RESTART, (input) => {
      InputView.validateRestartCommand(input);
      callback(input);
    });
  },

  validateUserNumber(input) {
    const inputArray = input.split("");

    if (input.length !== numberSize)
      throw new Error(ErrorString.USER_NUMBER_LENGTH_ERROR);
    if (input.replace(/[1-9]/g, "").length > 0)
      throw new Error(ErrorString.USER_NUMBER_NOT_NUMBER_ERROR);
    if (inputArray.length !== new Set(inputArray).size)
      throw new Error(ErrorString.USER_NUMBER_DUPLICATE_ERROR);
  },

  validateRestartCommand(input) {
    if (input.replace(/1|2/g, "").length > 0)
      throw new Error(ErrorString.RESTART_COMMAND_NOT_COMMAND_ERROR);
    if (input.length !== 1)
      throw new Error(ErrorString.RESTART_COMMAND_LENGTH_ERROR);
  },
};

module.exports = InputView;
