class RegularExp {
  easy = {
    letters: /[a-zA-Z]{8,}/g,
    digits: /\d{8,}/g,
  };
  medium = {
    lettersAndDigits: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,}/g,
    lettersAndSymbols:
      /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!?@#$%^&*])[a-zA-Z!?@#$%^&*]{8,}/g,
    digitsAndSymbols: /(?=.*?\d)(?=.*?[!?@#$%^&*])[\d!?@#$%^&*]{8,}/g,
  };
  strong = {
    strongRegExp: /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!?@#$%^&*]).{8,25}/g,
  };
}

export const exp = new RegularExp();
