import Commands from '../commands';

export default class Cart extends Commands {
  // Locator Region
  constructor() {
    super();
    this.cartItemContainer = '.cart_item_label';
    this.checkoutButton = '#checkout';
    this.removeShirtLocator = '[data-test="remove-sauce-labs-bolt-t-shirt"]';
    this.removeSauceLabs = '[data-test="remove-sauce-labs-onesie"]'
  }

  /**
   * Verify product is in the cart
   * @returns {void} void
   */
  verifyCardProduct(value) {
    this.verifyVisibilityOfElementWithText(this.cartItemContainer, value);
  }

  /**
   * Clicks on button in container
   * @returns {void} void
   */
  clickRemoveFromCart(text, button) {
    this.clickOnButtonInContainer(this.cartListContainer, text);
  }

  /**
   * Clicks checkout button
   * @returns {void} void
   */
  clickCheckoutButton() {
    this.clickOnElement(this.checkoutButton);
  }

  /**
   * Remove t shirt from cart
   * @returns {void} void
   */
  removeShirtFromCartButton() {
    this.clickOnElement(this.removeShirtLocator);
  }

  /**
   * Remove sauce labs onesie from cart
   * @returns {void} void
   */
  removeSauceLabsOnesie() {
    this.clickOnElement(this.removeSauceLabs);
  }

 }