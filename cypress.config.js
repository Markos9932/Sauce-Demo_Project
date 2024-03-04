const { defineConfig } = require('cypress');

module.exports = defineConfig({
    experimentalWebKitSupport: true,
    videoCompression: 0,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 7000,
    requestTimeout: 10000,
    responseTimeout: 30000,
   
    

    e2e: {
        chromeWebSecurity: false,
        setupNodeEvents: function(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
        baseUrl: 'https://www.saucedemo.com',

    },
});
