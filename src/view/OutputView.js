const { Console } = require("@woowacourse/mission-utils");
const { Guide: GuideString } = require("../constants/Constants");

const OutputView = {
  printStartString() {
    Console.print(GuideString.START);
  },
};

module.exports = OutputView;
