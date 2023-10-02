class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minV = min
    this.maxV = max
  }

  guess() {
    this.midV = Math.ceil((this.maxV + this.minV) / 2)
    return this.midV
  }

  lower() {
    this.maxV = this.midV
  }

  greater() {
    this.minV = this.midV
  }
}

module.exports = GuessingGame;
