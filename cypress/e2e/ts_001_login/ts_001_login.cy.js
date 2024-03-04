/// <reference types="cypress" />

import Login from '../../support/core/pages/login';
import Inventory from '../../support/core/pages/inventory';
import Inventory_item from '../../support/core/pages/inventory_item';
import Cart from '../../support/core/pages/cart';
import Checkout_step_one from '../../support/core/pages/checkout_step_one';
import Checkout_step_two from '../../support/core/pages/checkout_step_two';
import Checkout_complete from '../../support/core/pages/checkout_complete';
import { USERS } from '../../support/credentials/index';
import test_data_login from '../../fixtures/data/home/login';
import test_data_standard_user from '../../fixtures/data/users/standard_user';
import test_data_visual_user from '../../fixtures/data/users/visual_user';


const inventory = new Inventory();
const login = new Login();
const inventory_item = new Inventory_item();
const cart = new Cart();
const checkout_step_one = new Checkout_step_one();
const checkout_step_two = new Checkout_step_two();
const checkout_complete = new Checkout_complete();


describe('Check functionalities of a Swag Labs website', () => {
    // setup executed before each test case
    beforeEach(() => {

    })

    // teardown executed after each test case
    afterEach(() => {
      
    })

    // teardown executed after test suite
    after(() => {
      
    })
  
context('Check happy path and successful shopping process', () => {

  it('Add and remove item from Cart and complete Checkout', function () {
    // navigate to login page
    login.navigateToLoginPage();
    login.verifyVisibilityOfText(test_data_login.mainTitle);
    // login with valid credentials
    login.sauceDemoLogin(USERS.standard_user);
    // adding product to cart
    inventory.clickAddToCartButton(test_data_standard_user.boltShirt, test_data_standard_user.addToCartButton);
    // verify cart badge is updated
    inventory.verifyCardBadgeUpdate(test_data_standard_user.cardBadgeOneProduct);
    // click on another product
    inventory.clickOnProductText(test_data_standard_user.sauceLabsBikeLightProduct);
    // add product to cart
    inventory_item.clickOnText(test_data_standard_user.addToCartButton);
    // open the cart
    inventory_item.clickOnCartButton();
    // verify cart items in the Cart
    cart.verifyCardProduct(test_data_standard_user.sauceLabsBikeLightProduct);
    cart.verifyCardProduct(test_data_standard_user.boltShirt);
    // remove one item from the cart
    cart.removeShirtFromCartButton();
    // verify second cart item is in the cart
    cart.verifyCardProduct(test_data_standard_user.sauceLabsBikeLightProduct);
    cart.clickCheckoutButton();
    checkout_step_one.verifyVisibilityOfText(test_data_standard_user.checkoutInfo);
    // complete the form
    checkout_step_one.populateFirstNameField(test_data_standard_user.firstName);
    checkout_step_one.populateLastNameField(test_data_standard_user.lastName);
    checkout_step_one.populateZipPostalField(test_data_standard_user.zipCode);
    checkout_step_one.clickOnContinueButton();
    // complete and review the order
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.checkoutOverview);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.sauceLabsBikeLightProduct);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.productreview);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.productPrice);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.paymentInfo);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.shippingInfo);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.priceTotal);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.total);
    checkout_step_two.clickOnFinishButton();
    // verify that the order is completed successfully
    checkout_complete.verifyVisibilityOfText(test_data_standard_user.checkoutComplete);
    checkout_complete.verifyVisibilityOfText(test_data_standard_user.thankOrderText);
    checkout_complete.verifyVisibilityOfText(test_data_standard_user.orderReview);
    checkout_complete.clickOnBackHomeButton();
    // logout of user
    inventory.clickOnOpenMenyButton();
    inventory.clickOnLogoutButton();
  });

  it('Add idem to Cart and verify badge Update with different user', function () {
    // navigate to login page
    login.navigateToLoginPage();
    login.verifyVisibilityOfText(test_data_login.mainTitle);
    // login with valid credentials
    login.sauceDemoLogin(USERS.visual_user);
    // adding product to cart
    inventory.clickAddToCartButton(test_data_visual_user.sauceLabs, test_data_visual_user.addToCartButton);
    // open the cart
    inventory_item.clickOnCartButton();
    // verify cart items in the Cart
    cart.verifyCardProduct(test_data_visual_user.sauceLabs);
    // remove item from cart
    cart.removeSauceLabsOnesie();
    cart.clickCheckoutButton();
    // complete the form
    checkout_step_one.populateFirstNameField(test_data_visual_user.firstName);
    checkout_step_one.populateLastNameField(test_data_visual_user.lastName);
    checkout_step_one.populateZipPostalField(test_data_visual_user.zipCode);
    checkout_step_one.clickOnContinueButton();
    // complete and review the order - must be 0 value
    checkout_step_two.verifyVisibilityOfText(test_data_visual_user.totalZero);
    // cancel the order (if I continue to finish button, there will be a bug-successfully checkout complete)
    checkout_step_two.clickOnCancelButton();
    // logout of user
    inventory.clickOnOpenMenyButton();
    inventory.clickOnLogoutButton();
  });

  it('Add multiple Items to Cart and Verify Content', function () {
    // navigate to login page
    login.navigateToLoginPage();
    login.verifyVisibilityOfText(test_data_login.mainTitle);
    // login with valid credentials
    login.sauceDemoLogin(USERS.standard_user);
    // adding Bolt shirt to cart
    inventory.clickAddToCartButton(test_data_standard_user.boltShirt, test_data_standard_user.addToCartButton);
    // verify cart badge is updated
    inventory.verifyCardBadgeUpdate(test_data_standard_user.cardBadgeOneProduct);
    // click on another product
    inventory.clickOnProductText(test_data_standard_user.sauceLabsBikeLightProduct);
    // add product to cart
    inventory_item.clickOnText(test_data_standard_user.addToCartButton);
    // open the cart
    inventory_item.clickOnCartButton();
    // verify cart items in the Cart
    cart.verifyCardProduct(test_data_standard_user.sauceLabsBikeLightProduct);
    cart.verifyCardProduct(test_data_standard_user.boltShirt);
    cart.clickCheckoutButton();
    checkout_step_one.verifyVisibilityOfText(test_data_standard_user.checkoutInfo);
    // complete the form
    checkout_step_one.populateFirstNameField(test_data_visual_user.firstName);
    checkout_step_one.populateLastNameField(test_data_visual_user.lastName);
    checkout_step_one.populateZipPostalField(test_data_visual_user.zipCode);
    checkout_step_one.clickOnContinueButton();
    // complete and review the order - first product
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.checkoutOverview);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.sauceLabsBikeLightProduct);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.productreview);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.productPrice);
    // second product
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.boltShirt);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.secondProductReview);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.secondProductPrice);
    // verify total price
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.itemTotal);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.tax);
    checkout_step_two.verifyVisibilityOfText(test_data_standard_user.totalPriceForBothProducts);
    checkout_step_two.clickOnFinishButton();
    // verify that the order is completed successfully
    checkout_complete.verifyVisibilityOfText(test_data_standard_user.checkoutComplete);
    checkout_complete.verifyVisibilityOfText(test_data_standard_user.thankOrderText);
    checkout_complete.verifyVisibilityOfText(test_data_standard_user.orderReview);
    checkout_complete.clickOnBackHomeButton();
    // logout of user
    inventory.clickOnOpenMenyButton();
    inventory.clickOnLogoutButton();
  });
  
 });

});