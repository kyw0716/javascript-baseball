const { Random } = require("@woowacourse/mission-utils");

const RandomNumberGenerator = {
  /**
   * @param {numer} size 생성하고자 하는 랜덤 숫자의 개수
   * @returns (array) 랜덤 숫자 배열
   */
  generateRandomNumber(size) {
    const randomNumbers = [];

    while (randomNumbers.length < size) {
      const newRandomNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(newRandomNumber))
        randomNumbers.push(newRandomNumber);
    }

    return randomNumbers;
  },
};

module.exports = RandomNumberGenerator;
