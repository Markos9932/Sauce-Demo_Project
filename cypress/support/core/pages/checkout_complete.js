import Commands from '../commands';

export default class Checkout_complete extends Commands {
  // Locator Region
  constructor() {
    super();
    this.backHome = "#back-to-products";
  }

  /**
   * Clicks on back home button
   * @returns {void} void
   */
  clickOnBackHomeButton() {
    this.clickOnElement(this.backHome);
  }

  }