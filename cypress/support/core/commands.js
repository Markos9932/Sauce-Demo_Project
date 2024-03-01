

export default class Commands {
  constructor() {
    this.waitInterval = 30000;
  }

/**
 * Waiting method for usage in uper layers
 * @param {string} value - Time in ms
 * @returns {void} void
 */
waitPeriod(value) {
  cy.wait(value);
}

/**
 * Populate text element by provided locator
 * @param {string} locator - Element locator
 * @param {string} value - Text Value
 * @returns {void} void
 */
populateTextElement(locator, value) {
  cy.get(locator, { timeout: this.waitInterval })
    .type(value);
}

/**
 * Clear and Populate text element by provided locator
 * @param {string} locator - Element locator
 * @param {string} value - Text Value
 * @returns {void} void
 */
clearAndPopulateTextElement(locator, value) {
  cy.get(locator, { timeout: this.waitInterval })
    .clear()
    .type(value);
}

/**
 * Click on element by provided locator
 * @param {string} locator - Element locator
 * @returns {void} void
 */
clickOnElement(locator) {
  this.verifyVisibilityOfElement(locator);

  cy.get(locator, { timeout: this.waitInterval })
    .click();
}

/**
 * Click on element by provided locator
 * @param {string} locator - Element locator
 * @returns {void} void
 */
clickOnElement(locator) {
  this.verifyVisibilityOfElement(locator);

 cy.get(locator, { timeout: this.waitInterval })
   .click();
}

/**
 * Click on element by provided locator and text
 * @param {string} locator - Element locator
 * @param {string} text - Element text
 * @returns {void} void
 */
clickOnElementWithText(locator, text) {
  cy.get(locator, { timeout: this.waitInterval })
   .contains(text)
   .click();
}

/**
   * Click on text element by provided test
   * @param {string} text - Element text
   */
clickOnText(text) {
  cy.contains(text)
    .click({ force: true });
}

/**
 * Verify visibility of text with provided text
 * @param {string} text - Element text
 * @returns {void} void
 */
verifyVisibilityOfText(text) {
  cy.contains(text, { timeout: this.waitInterval })
  .should('be.visible');
}

/**
   * Verify invisibility of text with provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
verifyNonVisibilityOfText(text) {
  cy.contains(text, { timeout: this.waitInterval })
    .should('not.be.visible');
}

/**
 * Verify non existance of text with provided text
 * @param {string} text - Element text
 * @returns {void} void
 */
verifyNonExistanceOfText(value) {
  cy.contains(value, { timeout: this.waitInterval })
    .should('not.exist');
}

/**
 * Verify existance of text with provided text
 * @param {string} text - Element text
 * @returns {void} void
 */
verifyExistanceOfText(text) {
  cy.contains(text, { timeout: this.waitInterval })
    .should('exist');
}

/**
   * Verify invisibility of element with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
verifyNonVisibilityOfElement(locator) {
  cy.get(locator, { timeout: this.waitInterval })
    .should('not.be.visible');
}

/**
   * Verify visibility of element with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
verifyVisibilityOfElement(locator) {
  cy.get(locator, { timeout: this.waitInterval })
    .should('be.visible')
    .and('not.be.disabled');
}

/**
   * Verify non existance of element with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
verifyNonExistanceOfElement(locator) {
  cy.get(locator, { timeout: this.waitInterval })
    .should('not.exist');
}

/**
   * Verify visibility of element with locator and text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
verifyVisibilityOfElementWithText(locator, text) {
  cy.get(locator, { timeout: this.waitInterval })
    .contains(text)
    .should('be.visible');
}

/**
   * Verify non visibility of element with locator and text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
verifyNonVisibilityOfElementWithText(locator, text) {
  cy.get(locator, { timeout: this.waitInterval })
    .contains(text)
    .should('not.be.visible');
}

/**
   * Clicks on element in container
   * @param {string} containerLocator - Container locator containing user information
   * @param {string} text - Expected name inside the container
   * @param {string} buttonLocator - Button locator inside container
   * @param {string} button - Button inside container
   * @returns {void} void
   */
clickOnButtonInContainer(containerLocator, buttonLocator, text, button) {
  cy.contains(containerLocator, text) 
    .contains('button', button)
    .click()
 }

}
