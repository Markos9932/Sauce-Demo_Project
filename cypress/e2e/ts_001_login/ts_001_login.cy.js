/// <reference types="cypress" />

import Login from '../../support/core/pages/login';
import Inventory from '../../support/core/pages/inventory';
import Inventory_item from '../../support/core/pages/inventory';
import { USERS } from '../../support/credentials/index';
import test_data_login from '../../fixtures/data/home/login';
import test_data_credentials from '../../fixtures/data/users/credentials';



const inventory = new Inventory();
const login = new Login();
const inventory_item = new Inventory_item();




describe('Check added admin user login on Buildcon platform', () => {
    // setup executed before each test case
    beforeEach(() => {

    })

    // teardown executed after each test case
    afterEach(() => {
      
    })

    // teardown executed after test suite
    after(() => {
      
    })
  
context('Check happy path and unsuccessful login of added admin user', () => {

  it('Successful Login', function () {
    // navigate to login page
    inventory.inventoryPageLoadingResponse();
    login.navigateToLoginPage();
    login.verifyVisibilityOfText(test_data_login.mainTitle);
    // login with valid credentials
    login.sauceDemoLogin(USERS.standard_user);
    inventory.waitInventoryPageLoadingResponse();
    // adding Bolt shirt to cart
    inventory.clickAddToCartBoltShirtButton();
    // verify cart badge is updated
    inventory.verifyCardBadgeUpdate(test_data_credentials.cardBadgeOneProduct);
    // click on another product
    inventory.clickOnSouceLabsBikeLight(test_data_credentials.sauceLabsBikeLightProduct);
    // add product to cart
    inventory_item.clickOnText(test_data_credentials.addToCartButton);
    // open the cart
    inventory_item.clickOnCartButton();




   


  });
  
 
  
  });

});