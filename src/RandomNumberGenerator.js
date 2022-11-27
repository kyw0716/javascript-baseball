const { Random } = require("@woowacourse/mission-utils");

const RandomNumberGenerator = {
  generate(size) {
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

console.log(RandomNumberGenerator.generate(4));
