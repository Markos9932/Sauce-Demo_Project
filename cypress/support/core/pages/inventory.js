import Commands from '../commands';

export default class Inventory extends Commands {
  // Locator Region
  constructor() {
    super();
    this.inventoryRoute = '**/static/media/menu3x.52cc17a3.svg';
    this.productContainer = '.inventory_item_description';
    this.shoppingCartBadge = '.shopping_cart_badge';
    this.itemNameLocator = '.inventory_item_name ';
    this.openMenybutton = 'button#react-burger-menu-btn';
    this.logoutButton = 'a#logout_sidebar_link';
    this.buttonLocator = '.pricebar'
  }

    /**
    * Inventory loading state
    * @returns {void} void
    */
  inventoryPageLoadingResponse() {
    cy.intercept(this.inventoryRoute)
        .as('inventoryPageLoading');
  }

  /**
   * Wait for inventory page to load
   * @returns {void} void
   */
  waitInventoryPageLoadingResponse() {
    cy.wait('@inventoryPageLoading')
        .its('response.statusCode')
        .should('eq', 200);
  }

  /**
   * Clicks add to cart for product
   * @returns {void} void
   */
  clickAddToCartButton(text, button) {
    this.clickOnButtonInContainer(this.productContainer, this.buttonLocator, text, button);
  }

  /**
   * Verify that the card badge is updated
   * @returns {void} void
   */
  verifyCardBadgeUpdate(value) {
    this.verifyVisibilityOfElementWithText(this.shoppingCartBadge, value);
  }

  /**
   * Click on text of product name
   * @returns {void} void
   */
  clickOnProductText(value) {
    this.clickOnElementWithText(this.itemNameLocator, value);
  }

  /**
   * Clicks on open meny button
   * @returns {void} void
   */
  clickOnOpenMenyButton() {
    this.clickOnElement(this.openMenybutton);
  }

  /**
   * Clicks on logout button
   * @returns {void} void
   */
  clickOnLogoutButton() {
    this.clickOnElement(this.logoutButton);
  }

}