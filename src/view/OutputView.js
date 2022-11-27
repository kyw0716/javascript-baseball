const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../constants/Constants");

const OutputView = {
  printStartString() {
    Console.print(GuideString.START);
  },

  printHintString(strikeCount, ballCount) {
    const hint = [];
    if (ballCount !== 0) hint.push(`${ballCount}볼`);
    if (strikeCount !== 0) hint.push(`${strikeCount}스트라이크`);
    if (ballCount === 0 && strikeCount === 0) hint.push(`낫싱`);

    Console.print(hint.join(" "));
  },

  printEndString() {
    Console.print(GuideString.END);
  },
};

module.exports = OutputView;
