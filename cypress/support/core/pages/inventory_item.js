import Commands from '../commands';

export default class Inventory_item extends Commands {
  // Locator Region
  constructor() {
    super();
    this.cartButtonLocator = 'div#shopping_cart_container > .shopping_cart_link';
  }

  /**
   * Clicks on cart button
   * @returns {void} void
   */
  clickOnCartButton() {
    this.clickOnElement(this.cartButtonLocator);
  }

  }