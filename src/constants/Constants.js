const GuideString = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  END: `${numberSize}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
});

const ErrorString = Object.freeze({
  USER_NUMBER_LENGTH_ERROR: `입력값의 개수가 유효하지 않습니다. ${numberSize}개의 숫자를 입력해주세요.`,
  USER_NUMBER_NOT_NUMBER_ERROR: `입력값에 숫자가 아닌 다른 값이 포함돼있습니다. 숫자만 입력해주세요.`,
  USER_NUMBER_DUPLICATE_ERROR: `입력값에 중복이 포함돼있습니다. 중복되지 않는 숫자를 입력해주세요.`,
  RESTART_COMMAND_NOT_COMMAND_ERROR: `입력값에 1, 2가 아닌 다른 값이 포함돼있습니다. 1과 2중 하나를 선택해 입력해주세요.`,
  RESTART_COMMAND_LENGTH_ERROR: `입력값의 개수가 유효하지 않습니다. 1과 2중 하나를 선택해 입력해주세요.`,
});

const numberSize = 3;

module.exports = { GuideString, ErrorString, numberSize };
