import Commands from '../commands';

export default class Login extends Commands {
  // Locator Region
  constructor() {
    super();
    this.loginPageUrl = '/';
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';

   
  
  }

  /**
   * Navigates to login page
   * @returns {void} void
   */
  navigateToLoginPage() {
    cy.visit(this.loginPageUrl);
  }

  /**
   * Populates username field
   * @param {string} value - username
   * @returns {void} void
   */
  populateUsernameField(value) {
    this.clearAndPopulateTextElement(this.usernameField, value);
  }

  /**
   * Populates password field
   * @param {string} value - password
   * @returns {void} void
   */
  populatePasswordField(value) {
    this.clearAndPopulateTextElement(this.passwordField, value);
  }

  /**
   * Clicks login button
   * @returns {void} void
   */
  clickLoginButton() {
    this.clickOnElement(this.loginButton);
  }

  /**
   * Login as user via UI
   * @param {string} userType - User type to login as
   */
  sauceDemoLogin(userType) {
    cy
      .fixture(`credentials/${userType}.json`)
      .as('user');

    cy
      .get('@user')
      .then((user) => {
        this.populateUsernameField(user.username);
        this.populatePasswordField(user.password);
        this.clickLoginButton();
      });
  }



  







}