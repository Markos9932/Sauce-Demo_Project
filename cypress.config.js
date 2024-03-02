const { defineConfig } = require('cypress');

module.exports = defineConfig({
    experimentalWebKitSupport: true,
    videoCompression: 0,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 7000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
        cypressMochawesomeReporterReporterOptions: {
            reportDir: 'cypress/reports',
            charts: true,
            reportPageTitle: 'Test Suite Report',
            embeddedScreenshots: true,
            inlineAssets: true,
        },
        mochaJunitReporterReporterOptions: {
            mochaFile: 'cypress/reports/junit/results-[hash].xml',
        },
    },

    e2e: {
        chromeWebSecurity: false,
        setupNodeEvents: function(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
        baseUrl: 'https://www.saucedemo.com',

    },
});
