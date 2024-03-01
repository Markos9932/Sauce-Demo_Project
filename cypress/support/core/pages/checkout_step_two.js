import Commands from '../commands';

export default class Checkout_step_two extends Commands {
  // Locator Region
  constructor() {
    super();
    this.finishButton = "#finish";
    this.cancelButton = "#cancel";
  }

  /**
   * Clicks on finish button
   * @returns {void} void
   */
  clickOnFinishButton() {
    this.clickOnElement(this.finishButton);
  }

  /**
   * Clicks on cancel button
   * @returns {void} void
   */
  clickOnCancelButton() {
    this.clickOnElement(this.cancelButton);
  }

  }