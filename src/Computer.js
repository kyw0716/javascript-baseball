const { generateRandomNumber } = require("./utils/RandomNumberGenerator");

class Computer {
  #answer;

  constructor(randomNumber) {
    this.#answer = randomNumber;
  }

  /**
   * @param {number[]} inputNumbers 사용자가 입력한 숫자
   * @returns {number} 스트라이크 개수
   */
  getStrikeCount(inputNumbers) {
    let count = 0;

    for (let i = 0; i < inputNumbers.length; i++) {
      if (inputNumbers[i] === this.#answer[i]) count += 1;
    }

    return count;
  }

  /**
   * @param {number[]} inputNumbers 사용자가 입력한 숫자
   * @param {number} strikeCount 스트라이크 개수
   * @returns {number} 볼 개수
   */
  getBallCount(inputNumbers, strikeCount) {
    let count = 0;

    for (let i = 0; i < inputNumbers.length; i++) {
      if (this.#answer.includes(inputNumbers[i])) count += 1;
    }

    return count - strikeCount;
  }

  reset() {
    this.#answer = generateRandomNumber(this.#answer.length);
  }
}

module.exports = Computer;
