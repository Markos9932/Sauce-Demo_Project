import Commands from '../commands';

export default class Checkout_step_one extends Commands {
  // Locator Region
  constructor() {
    super();
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.continueButton = "#continue"
  }

  /**
   * Populates first name field
   * @param {string} value - first name
   * @returns {void} void
   */
  populateFirstNameField(value) {
    this.clearAndPopulateTextElement(this.firstName, value);
  }

  /**
   * Populates last name field
   * @param {string} value - last name
   * @returns {void} void
   */
  populateLastNameField(value) {
    this.clearAndPopulateTextElement(this.lastName, value);
  }

  /**
   * Populates zip/postal field
   * @param {string} value - postal
   * @returns {void} void
   */
  populateZipPostalField(value) {
    this.clearAndPopulateTextElement(this.postalCode, value);
  }

  /**
   * Clicks on continue button
   * @returns {void} void
   */
  clickOnContinueButton() {
    this.clickOnElement(this.continueButton);
  }

}