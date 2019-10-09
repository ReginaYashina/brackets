module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let i = 0;
  let c = 0;
  let result = true;

  while (arr.length > 0) {
    i = 0;
    if (arr.length % 2) {
      result = false;
      break;
    }

    for (i; i < (arr.length - 1); i++) {
      c = 0;
      for (c; c < bracketsConfig.length; c++) {
        if (arr[i] == bracketsConfig[c][0] && arr[i + 1] == bracketsConfig[c][1]) {
          arr.splice(i, 2);
          break;
        }
      }
      if (c != bracketsConfig.length) {
        break;
      }
    }
    if (i == arr.length - 1 && c == bracketsConfig.length) {
      result = false;
      break;
    }
  }
  return result;
}
