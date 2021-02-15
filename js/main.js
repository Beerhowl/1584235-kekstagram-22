const getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  getRandomNumber(0,9);
  
  
  const isCheckedString = function (text, maxLength = 140) {
    return text.length <= maxLength;
}

isCheckedString('Hello world');
