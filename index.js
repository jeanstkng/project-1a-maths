module.exports = {
  /**
   * Sum of two numbers
   * @example
   * n1 = 1, n2 = 3 = > result 4
   * @param {*} n1 First element of the sum
   * @param {*} n2 Second element of the sum
   * @returns
   */
  sum: function (n1, n2) {
    return this.isNumber(n1, n2) ? n1 + n2 : this.errorMessage();
  },
  /**
   * Substract of two numbers
   * @example
   * n1 = 1, n2 = 3 = > result -2
   * @param {*} n1 First element of the substract
   * @param {*} n2 Second element of the substract
   * @returns
   */
  substract: function (n1, n2) {
    return this.isNumber(n1, n2) ? n1 - n2 : this.errorMessage();
  },
  /**
   * Multiplication of two numbers
   * @example
   * n1 = 1, n2 = 3 = > result 3
   * @param {*} n1 First element of the multiplication
   * @param {*} n2 Second element of the multiplication
   * @returns
   */
  multiply: function (n1, n2) {
    return this.isNumber(n1, n2) ? n1 * n2 : this.errorMessage();
  },
  /**
   * Division of two numbers
   * @example
   * n1 = 1, n2 = 3 = > result 0.33
   * @param {*} n1 First element of the division
   * @param {*} n2 Second element of the division
   * @returns
   */
  divide: function (n1, n2) {
    return this.isNumber(n1, n2) ? n1 / n2 : this.errorMessage();
  },
  /**
   * Error message that is executed when we got no numeric values
   */
  errorMessage: function () {
    console.log("A value or two are not numbers");
  },
  /**
   *  Verify that values are numbers
   * @param {*} n1 
   * @param {*} n2 
   */
  isNumber: function (n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      return false;
    }
    return true;
  },
};
