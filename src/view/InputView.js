const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  getUserInput(guideString, callback) {
    Console.readLine(guideString, (input) => {
      callback(input);
    });
  },
};

module.exports = InputView;
