import Commands from '../commands';

export default class Inventory extends Commands {
  // Locator Region
  constructor() {
    super();
    this.inventoryRoute = '**/static/media/menu3x.52cc17a3.svg';
    this.addToCartBoltShirt = '#add-to-cart-sauce-labs-bolt-t-shirt';
    this.shoppingCartBadge = '.shopping_cart_badge';
    this.itemNameLocator = '.inventory_item_name ';
    


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
   * Clicks add to cart for the Bolt shirt button
   * @returns {void} void
   */
  clickAddToCartBoltShirtButton() {
    this.clickOnElement(this.addToCartBoltShirt);
  }

  /**
   * Verify that the card badge is updated
   * @returns {void} void
   */
  verifyCardBadgeUpdate(value) {
    this.verifyVisibilityOfElementWithText(this.shoppingCartBadge, value);
  }

  /**
   * Click on Sauce Bike Light Product
   * @returns {void} void
   */
  clickOnSouceLabsBikeLight(value) {
    this.clickOnElementWithText(this.itemNameLocator, value);
  }

  







  







}