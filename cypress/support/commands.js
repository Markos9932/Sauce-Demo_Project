
import 'cypress-file-upload'

export default class Commands {
  constructor() {
    this.waitInterval = 30000;
  }

  /**
   * Clears browser cookies
   * @returns {void} void
   */
  clearCookies() {
    cy.clearCookies();
  }

  /**
   * Reloads page
   * @returns {void} void
   */
  reloadPage() {
    cy.reload();
  }

  /**
   * Verify url content
   * @returns {void} void
   */
  verifyUrl(value) {
    cy.url()
      .should('include', value);
  }

  /**
   * Console logger
   * @param {string} value - log value
   * @returns {void} void
   */
  consoleLogger(value) {
    cy.log(value);
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
   * Finds element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  getElement(locator) {
    cy.get(locator);
  }

  /**
   * Return Element value
   * @param {string} locator - Element locator
   * @returns {integar} value - Element value
   */
  getElementValue(locator, alliasName) {
    cy.get(locator)
      .invoke("val")
      .then((value) => {
        return cy.wrap(value).as(alliasName);
      });
  }

  /**
   * Return Element text
   * @param {string} locator - Element locator
   * @returns {integar} value - Element value
   */
  getElementText(locator, alliasName) {
    cy.get(locator)
      .invoke("text")
      .then((value) => {
        return cy.wrap(value).as(alliasName);
      });
  }

  /**
   * Navigation to page bottom
   * @returns {void} void
   */
  navigateToPageBottom() {
    cy.scrollTo('bottom');
  }

  /**
   * Navigation to page top
   * @returns {void} void
   */
  navigateToPageTop() {
    cy.scrollTo('top');
  }

  /**
   * Navigation to page center
   * @returns {void} void
   */
  navigateToPageCenter() {
    cy.scrollTo('center');
  }

  /**
   * Scroll to element top
   * @param {string} value - Element value
   * @returns {void} void
   */
  scrollElementToTop(value) {
    cy.get(value)
      .scrollTo('top')
  }

  /**
   * Scroll to element bottom
   * @param {string} value - Element value
   * @returns {void} void
   */
  scrollElementToCenter(value) {
    cy.get(value)
      .scrollTo('center')
  }

  /**
   * Scroll to element center
   * @param {string} value - Element value
   * @returns {void} void
   */
  scrollElementToBottom(value) {
    cy.get(value)
      .scrollTo('bottom')
  }

  /**
   * Finds element by provided locator, text and area
   * @param {string} locator - Element locator
   * @param {string} text - Element text0
   * @param {string} eq - Element area
   * @returns {void} void
   */
  getElementWithTextInArea(locator, text, eq) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(eq)
      .should('contain', text);
  }

  /**
   * Finds the last element by provided locator, text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
  getLastElementWithTextInArea(locator, text) {
    cy.get(locator, { timeout: this.waitInterval })
      .last()
      .should('contain', text);
  }

  /**
   * Finds the first element by provided locator, text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
  getFirstElementWithTextInArea(locator, text) {
    cy.get(locator, { timeout: this.waitInterval })
      .first()
      .should('contain', text);
  }

  /**
   * Verify existance of element by provided locator, text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
  checkElementWithText(locator, text) {
    cy.get(locator, { timeout: this.waitInterval })
      .should('contain', text);
  }

  /**
   * Verify existance of element by provided type
   * @param {string} value - Element type
   * @returns {void} void
   */
  checkElementType(value) {
    cy.get(`input[type=${value}]`)
      .should('exist');
  }

  /**
   * Verify number of elements with locator
   * @param {string} locator - Element locator
   * @param {string} value - Number of elements
   * @returns {void} void
   */
  checkNumberOfElements(locator, value) {
    cy.get(locator)
      .should('have.length', value);
  }

  /**
   * Verify existance of element with locator and class
   * @param {string} locator - Element locator
   * @param {string} value - Element class
   * @returns {void} void
   */
  checkElementClass(locator, value) {
    cy.get(locator, { timeout: this.waitInterval })
      .should('have.class', value);
  }

  /**
   * Verify that element is checked with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  verifyCheckedElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .should('be.checked');
  }

  /**
   * Verify that element is unchecked with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  verifyUncheckedElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .should('not.be.checked');
  }

  /**
   * Verify visibility of child element with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  verifyVisibilityOfChildElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .children({ timeout: this.waitInterval })
      .should('be.visible');
  }

  /**
   * Verify visibility of child element with locator and text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
  verifyVisibilityOfChildElementWithText(locator, text) {
    cy.get(locator)
      .children()
      .contains(text)
  }

  /**
   * Verify visibility of child element with locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @returns {void} void
   */
  verifyVisibilityOfChildElementInArea(locator, eq) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(eq)
      .children()
      .should('be.visible');
  }

  /**
   * Verify invisibility of child element with locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @returns {void} void
   */
  verifyNonVisibilityOfChildElementInArea(locator, eq) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(eq)
      .children()
      .should('not.exist');
  }

  /**
   * Verify that element is checked with locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @returns {void} void
   */
  checkCheckBoxElementInAreaIsChecked(locator, area) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(area)
      .should('be.checked');
  }
  /**
   * Verify that element is not checked with locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @returns {void} void
   */
  checkCheckBoxElementInAreaIsUnchecked(locator, area) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(area)
      .should('not.be.checked');
  }

  /**
   * Clearing text element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  clearTextElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .clear();
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
   * Populate react text element by provided locator
   * @param {string} locator - Element locator
   * @param {string} value - Text Value
   * @returns {void} void
   */
  populateTextElementReact(locator, value) {
    cy.get(locator, { timeout: this.waitInterval })
      .type(`${value}{downarrow}{enter}`);
  }

  /**
   * Populate text element by provided locator and area
   * @param {string} locator - Element locator
   * @param {string} area - Element area
   * @param {string} value - Text Value
   * @returns {void} void
   */
  findAndPopulateTextAreaInContainer(locator, area, value) {
    cy.get(locator, { timeout: this.waitInterval })
      .find(area)
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
   * Clear and Populate last text element by provided locator
   * @param {string} locator - Element locator
   * @param {string} value - Text Value
   * @returns {void} void
   */
  clearAndPopulateLastTextElement(locator, value) {
    cy.get(locator, { timeout: this.waitInterval })
      .last()
      .clear()
      .type(value);
  }

  /**
   * Clear and Enter text in text element by provided locator
   * @param {string} locator - Element locator
   * @param {string} value - Text Value
   * @returns {void} void
   */
  clearAndPopulateEnterTextElement(locator, value) {
    cy.get(locator, { timeout: this.waitInterval })
      .clear()
      .type(`${value}{enter}`);
  }

  /**
   * Populate text element by provided locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @param {string} value - Text Value
   * @returns {void} void
   */
  populateTextElementInArea(locator, value, eq) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(eq)
      .type(value);
  }

  /**
   * Clear and Populate text element with delay by provided locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @param {string} value - Text Value
   * @returns {void} void
   */
  clearAndPopulateTextElementWithDelay(locator, text, eq) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(eq)
      .click()
      .clear()
      .type(text, { delay: 100 });
  }

  /**
   * Populate text element with delay by provided locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @param {string} value - Text Value
   * @returns {void} void
   */
  populateTextElementWithDelay(locator, text, eq) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(eq)
      .type(text, { delay: 100 });
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
   * Right click on element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  rightClickOnElement(locator) {
    this.verifyVisibilityOfElement(locator);

    cy.get(locator, { timeout: this.waitInterval })
      .rightclick();
  }

  /**
   * Click on element center by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  clickOnElementCenter(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .click('center', { force: true });
  }

  /**
   * Force Click on element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  forceClickOnElement(locator) {
    this.verifyVisibilityOfElement(locator);

    cy.get(locator, { timeout: this.waitInterval })
      .click({ force: true });
  }

  /**
   * Double click on element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  doubleClickOnElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .dblclick({ force: true });
  }

  /**
   * Click on hidden element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  clickOnHiddenElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .click({ force: true });
  }

  /**
   * Click on child element by provided locator and text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
  clickOnChildElement(locator, text) {
    cy.get(locator)
      .children()
      .contains(text)
      .click({ force: true });
  }

  /**
   * Click on element by provided locator and area
   * @param {string} locator - Element locator
   * @param {string} area - Element area
   * @returns {void} void
   */
  clickOnElementInArea(locator, area) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(area)
      .click();
  }

  /**
   * Click on last element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  clickOnElementLast(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .last()
      .click();
  }

  /**
   * Click on first element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  clickOnElementFirst(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .first()
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
   * Click on table header by provided test
   * @param {string} text - Element text
   * @returns {void} void
   */
  clickOnTableHeaderText(text) {
    cy.contains('th', text)
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
   * Click on text and edit
   * @param {string} text - Element text
   * @param {string} type - Element type
   * @returns {void} void
   */
  clickOnTextAndEdit(text, type) {
    cy.contains(text, { timeout: this.waitInterval })
      .type(type);
  }

  /**
   * Select from dropdown element by provided locator
   * @param {string} locator - Element locator
   * @param {string} value - Element select value
   * @returns {void} void
   */
  selectFromDropDown(locator, value) {
    cy.get(locator, { timeout: this.waitInterval })
      .select(value);
  }


  /**
   * Select from dropdown element by provided locator and area
   * @param {string} locator - Element locator
   * @param {string} area - Element area
   * @param {string} value - Element select value
   * @returns {void} void
   */
  selectFromSpecificDropDown(locator, area, value) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(area)
      .select(value);
  }

  /**
   * Select slibing element by provided locator and sibling
   * @param {string} locator - Element locator
   * @param {string} sibling - Element sibling
   * @returns {void} void
   */
  selectSiblingElement(locator, sibling) {
    cy.get(locator, { timeout: this.waitInterval })
      .siblings()
      .find(sibling)
      .click({
        force: true,
      });
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
   * Verify visibility of text without case match with provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
  verifyVisibilityOfTextNoCaseMatch(text) {
    cy.contains(text, { matchCase: false })
      .should('exist');
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
   * Verify existance of table footer text with provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
  checkTableFooterText(text) {
    cy.contains('tfoot', text)
      .should('exist');
  }

  /**
   * Verify existance of table body text with provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
  checkTableBodyText(text) {
    cy.contains('tbody', text)
      .should('exist');
  }

  /**
   * Verify none existance of table body text with provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
  checkTableBodyTextNotExist(text) {
    cy.contains('tbody', text)
      .should('not.exist');
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
   * Verify visibility of text in table row
   * @param {string} rowText - Row Title Text
   * @param {string} text - Text
   * @returns {void} void
   */
  verifyVisibilityOfTextInTableRow(rowText, text) {
    cy.contains(rowText)
      .parents('tr')
      .contains(text)
      .should('be.visible');
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
   * Verify visibility and color of element inside the user container
   * @param {string} containerLocator - Container locator containing user information
   * @param {string} username - Expected username inside the container
   * @param {string} expectedColor - Expected color in hex format (e.g., #f5a623)
   * @returns {void} void
   */
  verifyVisibilityAndColorOfElementInConatainer(containerLocator, username, expectedColor) {
    cy.get(containerLocator, { timeout: this.waitInterval })
      .should('be.visible')
      .contains(username) 
      .parent() 
      .find(':nth-child(1)') 
      .should('be.visible')
      .should('have.css', 'background-color', expectedColor);
   }

   /**
   * Verify visibility and data inside the user container
   * @param {string} containerLocator - Container locator containing user information
   * @param {string} textAtt - Expected attribute inside the container
   * @param {string} child - Expected attribute inside the container
   * @param {string} text - Text
   * @returns {void} void
   */
  verifyVisibilityAndUserDataInContainer(containerLocator, text, child, textAtt) {
    cy.contains(containerLocator, text)
      .should('be.visible')
      .parent()
      .find(child)
      .contains(textAtt)
      .should('be.visible');

   }

   /**
   * Delete a user with a specific image by finding the right container based on text
   * @param {string} containerLocator - Container locator containing user information
   * @param {string} text - Text to identify the right container
   * @param {string} textCommand - Text to choose commands to manipulate with users
   * @returns {void} void
   */
  actionOverUserWithSpecificImageByText(containerLocator, text, textCommand) {
    cy.contains(containerLocator, text)
     .prev() // Levi kontejner
     .trigger('mouseover') // Izvrši hover na levi kontejner
     .parent() // Nadji roditelja levog kontejnera, koji bi trebalo biti desni kontejner
     .within(() => {
      // Ovde dodajte kod za izvršenje akcija na korisniku, na primer, klikanje na "Remove" dugme
    cy.contains(textCommand).click();
    });

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
   * Verify visibility of picture with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  verifyVisibilityOfPicture(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .find("img")
      .should('exist')
      .and('have.attr', 'src');
  }

  /**
   * Verify visibility of complex element with locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @returns {void} void
   */
  verifyVisibilityOfComplexElement(locator, eq) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(eq)
      .should('be.visible');
  }

  /**
   * Verify invisibility of element value with locator and text
   * @param {string} text - Element text
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  verifyNonVisibilityOfElementWithValue(locator, text) {
    cy.get(locator, { timeout: this.waitInterval })
      .should('not.have.value', text);
  }

  /**
   * Verify visibility of value in element with locator and text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
  verifyVisibilityOfElementWithValue(locator, text) {
    cy.get(locator, { timeout: this.waitInterval })
      .should('have.value', text);
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
   * Verify visibility of element with locator and text and scroll to element
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
  verifyVisibilityOfElementWithTextWithScroll(locator, text) {
    cy.get(locator, { timeout: this.waitInterval })
      .scrollIntoView()
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
   * Verify disabled element with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  verifyDisabledElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .should('be.disabled');
  }

  /**
   * Verify disabled complex element with locator and area
   * @param {string} locator - Element locator
   * @param {string} eq - Element area
   * @returns {void} void
   */
  verifyComplexElementDisabled(locator, eq) {
    cy.get(locator, { timeout: this.waitInterval })
      .eq(eq)
      .should('be.disabled');
  }

  /**
   * Press enter on element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  pressEnterOnElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .type(`{enter}`);
  }

  /**
   * Press enter on element by provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
  pressEnterOnTextElement(text) {
    cy.contains(text)
      .type(`{enter}`);
  }

  /**
   * Check radio/checkbox element by provided locator without value
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  checkElementOptionNoValue(locator) {
    cy.get(locator)
      .check({ force: true });
  }

  /**
   * Check radio/checkbox element by provided locator
   * @param {string} locator - Element locator
   * @param {string} value - Element check value
   * @returns {void} void
   */
  checkElementOption(locator, value) {
    cy.get(locator)
      .check(value, { force: true });
  }

  /**
   * Uncheck radio/checkbox element by provided locator
   * @param {string} locator - Element locator
   * @param {string} value - Element check value
   * @returns {void} void
   */
  uncheckElementOption(locator, value) {
    cy.get(locator)
      .uncheck(value, { force: true });
  }

  /**
   * Uncheck radio/checkbox element by provided locator without value
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  uncheckElementOptionNoValue(locator) {
    cy.get(locator)
      .uncheck({ force: true });
  }

  /**
   * Swipe element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  swipeElement(locator) {
    cy.get(locator)
      .trigger('pointerdown', { which: 1 })
      .trigger('pointermove', 'right')
      .trigger('pointerup', { force: true });
  }

  /**
   * Hover element by provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
  hoverElementText(text) {
    cy.contains(text)
      .trigger('mouseover');
  }

  /**
   * Hover element by provided locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  hoverElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .trigger('mouseover');
  }

  /**
   * Drag&Drop element to element by provided text
   * @param {string} firstText - Drag Element text
   * @param {string} secondText - Drop Element text
   * @returns {void} void
   */
  dragTextElement(firstText, secondText) {
    const dataTransfer = new DataTransfer();

    this.waitPeriod(500);
    cy.contains(firstText).trigger('dragstart', {
      dataTransfer
    });

    cy.contains(secondText).trigger('drop', {
      dataTransfer
    });
  }

  /**
   * Drag&Drop element to element by provided locators
   * @param {string} firstElement - Drag Element locator
   * @param {string} secondElement - Drop Element locator
   * @returns {void} void
   */
  dragAndDropElementToElement(firstElement, secondElement) {
    const dataTransfer = new DataTransfer();

    this.waitPeriod(500);
    cy.get(firstElement).trigger('dragstart', {
      dataTransfer
    });

    cy.get(secondElement).trigger('drop', {
      dataTransfer
    });
  }

  /**
   * Drag&Drop element to element by provided locators
   * @param {string} firstElement - Drag Element locator
   * @param {string} secondElement - Drop Element locator
   * @returns {void} void
   */
  dragAndDropTextElementToElement(firstElement, secondElement) {
    const dataTransfer = new DataTransfer();

    this.waitPeriod(500);
    cy.contains(firstElement).trigger('dragstart', {
      dataTransfer
    });

    cy.get(secondElement).trigger('drop', {
      dataTransfer
    });
  }

  /**
   * Making page screenshot
   * @param {string} name - Screenshot name
   * @returns {void} void
   */
  pageScreenshot(name) {
    cy.screenshot(name);
  }

  /**
   * Click on table row element by provided name, area and text
   * @param {string} name - Element Name
   * @param {string} eq - Element area
   * @param {string} text - Element text
   * @returns {void} void
   */
  clickOnTableRowText(name, eq, text) {
    cy.get('tbody')
      .contains(name)
      .parent('tr')
      .within(() => {
        cy.get('td', { timeout: this.waitInterval })
          .eq(eq)
          .contains(text)
          .click();
      });
  }

  /**
 * Click on table row element by provided locator, area and name
 * @param {string} locator - Element locator
 * @param {string} eq - Element area
 * @param {string} name - Element name
 * @returns {void} void
 */
  clickOnTableRowElement(locator, eq, name) {
    cy.get('tbody')
      .contains(name)
      .parent('tr')
      .within(() => {
        cy.get('td', { timeout: this.waitInterval })
          .eq(eq)
          .get(locator)
          .click();
      });
  }

  /**
   * Verify table row text by provided name, area and text
   * @param {string} name - Element name
   * @param {string} eq - Element area
   * @param {string} text - Element text
   * @returns {void} void
   */
  verifyTableRowText(name, eq, text) {
    cy.contains(name)
      .parent('tr')
      .within(() => {
        cy.get('td', { timeout: this.waitInterval })
          .eq(eq)
          .contains(text, { timeout: this.waitInterval });
      });
  }

  /**
   * Verify visibility of table text element by provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
  verifyVisibilityOfTableElementWithText(text) {
    cy.get('tbody', { timeout: this.waitInterval })
      .contains(text)
      .should('be.visible');
  }

  /**
   * Check table radio button by provided name and area
   * @param {string} name - Element name
   * @param {string} eq - Element area
   * @returns {void} void
   */
  checkRadioBtnInTableRow(name, eq) {
    cy.get('tbody')
      .contains(name)
      .parent('tr')
      .within(() => {
        cy.get('td', { timeout: this.waitInterval })
          .eq(eq)
          .children()
          .check();
      });
  }

  /**
   * Click on text in table row
   * @param {string} rowText - Row Title Text
   * @param {string} text - Text
   * @returns {void} void
   */
  clickOnTableRowElementWithText(rowText, text) {
    cy.contains(rowText)
      .parents('tr')
      .contains(text)
      .click({ force: true });
  }

  /**
   * Click on table body text
   * @param {string} text - Text
   * @returns {void} void
   */
  clickOnTableElementWithText(text) {
    cy.get('tbody', { timeout: this.waitInterval })
      .contains(text)
      .click({ force: true });
  }

  /**
   * Check table checkbox by provided text and locator
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
  checkCheckBoxInTableRow(text, locator) {
    cy.contains(text, { timeout: this.waitInterval })
      .parents('tr')
      .find(locator)
      .click();
  }

  /**
   * Click on complex nested element by provided locators
   * @param {string} mainLocator - Main Element locator
   * @param {string} locator1 - First Element locator
   * @param {string} locator2 - Second Element locator
   * @returns {void} void
   */
  clickOnButtonInActions(mainLocator, locator1, locator2) {
    cy.get(mainLocator)
      .then(($actions) => {
        if ($actions.find(locator1).length > 0) {
          this.clickOnElement(locator1);
          this.clickOnElement(locator2);
        } else {
          this.clickOnElement(locator2);
        }
      });
  }

  /**
   * Select table Dropdown element by provided name, area and value
   * @param {string} name - Element name
   * @param {string} eq - Element area
   * @param {string} value - Element value
   * @returns {void} void
   */
  selectFromDropDownInTableRow(name, eq, value) {
    cy.get('tbody')
      .contains(name)
      .parent('tr')
      .within(() => {
        cy.get('td', { timeout: this.waitInterval })
          .eq(eq)
          .get('select')
          .select(value);
      });
  }

  /**
   * File upload
   * @param {string} locator - Element locator
   * @param {string} fileUrl - Upload file location
   * @returns {void} void
   */
  uploadFile(locator, fileUrl) {
    cy.get(locator, { force: true })
      .attachFile(fileUrl);
    // TODO: kick this out and wait for upload route to respond
    // with successful upload before moving on
    // cy.wait is an anti pattern
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
  }

  /**
   * Check Unchecked Checkbox
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  checkUncheckedCheckbox(locator) {
    cy.get(locator)
      .invoke('prop', 'checked').then((isChecked) => {
        if (!isChecked) {
          cy.get(locator)
            .check()
            .should('be.checked');
        } else {
          this.consoleLogger('Checkbox is already checked');
        }
      });
  }

  /**
   * Uncheck checked Checkbox
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  uncheckCheckedCheckbox(locator) {
    cy.get(locator)
      .invoke('prop', 'checked').then((isChecked) => {
        if (isChecked) {
          cy.get(locator)
            .uncheck()
            .should('not.be.checked');
        } else {
          this.consoleLogger('Checkbox is already unchecked');
        }
      });
  }

  /**
   * Check and Save Unchecked Checkbox
   * @param {string} locator - Element locator
   * @param {string} secondLocator - Second Element locator
   * @returns {void} void
   */
  checkAndSaveUncheckedCheckbox(locator, secondLocator) {
    cy.get(locator)
      .invoke('prop', 'checked').then((isChecked) => {
        if (!isChecked) {
          cy.get(locator)
            .check()
            .should('be.checked')
            .wait(1000);
          this.clickOnElement(secondLocator)
          this.waitPeriod(1000);
        } else {
          this.consoleLogger('Checkbox is already checked');
        }
      });
  }

  /**
   * Uncheck and Save checked Checkbox
   * @param {string} locator - Element locator
   * @param {string} secondLocator - Second Element locator
   * @returns {void} void
   */
  uncheckAndSaveCheckedCheckbox(locator, secondLocator) {
    cy.get(locator)
      .invoke('prop', 'checked').then((isChecked) => {
        if (isChecked) {
          cy.get(locator)
            .uncheck()
            .should('not.be.checked')
            .wait(1000);
          this.clickOnElement(secondLocator);
          this.waitPeriod(1000);
        } else {
          this.consoleLogger('Checkbox is already unchecked');
        }
      });
  }

  /**
   * Check Checkbox is checked
   * @param {string} locator - Element locator
   * @returns {void} void
   */
  checkCheckedCheckbox(locator) {
    cy.get(locator)
      .should('be.checked');
  }

  /**
   * Click on Canvas location with provide locator and coordiantes
   * @param {string} locator - Element locator
   * @param {string} x - x coordinate
   * @param {string} y - y coordinate
   * @returns {void} void
   */
  clickOnCanvasLocation(locator, x, y) {
    cy.get(locator).then(($canvas) => {
      const coordinateX = x;
      const coordinateY = y;

      cy.wrap($canvas)
        .scrollIntoView()
        .click(coordinateX, coordinateY);
    });
  }

  /**
   * Click on Canvas area with provide locator and area
   * @param {string} locator - Element locator
   * @param {string} value - Canvas area
   * @returns {void} void
   */
  clickOnCanvasArea(locator, value) {
    cy.get(locator)
      .then(($canvas) => {
        const area = value;

        cy.wrap($canvas)
          .scrollIntoView()
          .click(area)
      });
  }

  /**
   * Draw dot on Canvas with provide locator and coordiantes
   * @param {string} locator - Element locator
   * @param {string} x - x coordinate
   * @param {string} y - y coordinate
   * @returns {void} void
   */
  drawDotOnCanvas(locator, x, y) {
    cy.get(locator)
      .then(($canvas) => {
        const coordinateX = x;
        const coordinateY = y;

        cy.wrap($canvas)
          .trigger('mousedown', coordinateX, coordinateY, { force: true })
          .click({ force: true })
          .trigger('mousemove', coordinateX, coordinateY, { force: true })
          .click({ force: true })
          .trigger('mouseup', { force: true })
          .click({ force: true })
      });
  }

  /**
   * Verify visibility and color of checked element inside the user container
   * @param {string} containerLocator - Container locator containing user information
   * @param {string} text - Expected name inside the container
   * @param {string} expectedColor - Expected color in hex format (e.g., #f5a623)
   * @returns {void} void
   */
  verifyVisibilityAndColorOfCheckedElementInConatainer(containerLocator, text, expectedColor) {
    cy.contains(containerLocator, text)
      .next()
      .parent() 
      .find(':nth-child(1)') 
      .should('be.visible')
      .should('have.css', 'background-color', expectedColor);
   }


   /**
   * Verify Checked Checkbox In Container
   * @param {string} containerLocator - Container locator containing radio buttons
   * @param {string} text - Expected name inside the container
   * @param {number} index - Index of the radio button to check
   * @returns {void} void
   */
  verifyCheckedCheckboxInContainer(containerLocator, text, index) {
    cy.contains(containerLocator, text)
    .find('[type="radio"]').then(radioButtons => {
      cy.wrap(radioButtons).eq(index).should('be.checked');
    });
   }

  /**
   * Adding project and check checbox role 
   * @param {string} containerLocator - Container locator containing user information
   * @param {string} text - Expected name inside the container
   * @param {string} checkboxLocator - Expected color in hex format (e.g., #f5a623)
   * @param {string} projectCheckbox - Expected color in hex format (e.g., #f5a623)
   * @param {string} role - Expected color in hex format (e.g., #f5a623)
   * @returns {void} void
   */
  addProjectToUser(containerLocator, text, checkboxLocator, role, projectCheckbox,) {
    cy.contains(containerLocator, text) 
      .find(projectCheckbox)
      .click()
    cy.contains(containerLocator ,text)
      .find(checkboxLocator)
      .click()
      
    }

  /**
   * Clicks on hidden element inside container
   * @param {string} containerLocator
   * @param {string} projectTitle 
   * @param {string} containerLocator 
   * @returns {void} void
   */
  clickOnProjectDetails(containerLocator, text, projectDetailsLocator) {
    cy.contains(containerLocator, text) 
    .within(() => {
      cy.get(projectDetailsLocator) 
        .invoke('show', { force: true }) 
        .click({ force: true }); 
    });
  }

  /**
   * Verify visibility and data inside the user container in projects
   * @param {string} containerLocator - Container locator containing user information
   * @param {string} textAtt - Expected attribute inside the container
   * @param {string} text - Text
   * @returns {void} void
   */
  verifyVisibilityAndUserDataInContainerinProjects(containerLocator, text, textAtt) {
    cy.contains(containerLocator, text)
      .should('be.visible')
      .parent()
      .find(':nth-child(2)')
      .contains(textAtt)
      .should('be.visible');

   }

   /**
   * Select date from calendar element by provided locators and date
   * @param {string} calendarButtonLocator - Locator for the button to open the calendar
   * @param {string} calendarDayLocator - Locator for the calendar day
   * @param {string} datePickerLocator - Locator for the calendar day
   * @param {number} dateIndex - Index of the date to select (0-based)
   * @returns {void} void
   */
  selectDateInCalendarWithButtonAndClass(calendarButtonLocator, calendarDayLocator, datePickerLocator, dateIndex) {
    cy.get(calendarButtonLocator, { timeout: this.waitInterval })
      .click()
    cy.get(calendarDayLocator + datePickerLocator, { timeout: this.waitInterval })
      .eq(dateIndex)
      .click();
   }

   

 














    

}
