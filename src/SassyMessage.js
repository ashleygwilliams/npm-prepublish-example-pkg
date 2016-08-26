class SassyMessage {
  constructor(message) {
    this.message = message;
  }

  print() {
    return "  (•_•)\n" +
           " <)   )╯ " + this.message + "\n" +
           "  /   \\ ";
  }
}

module.exports = SassyMessage;
