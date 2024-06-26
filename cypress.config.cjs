const cypress = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor');
const browserify = require('@cypress/browserify-preprocessor');

module.exports = cypress.defineConfig({
    // numTestsKeptInMemory: 0,
    env: {
        uncaughtCypressException: false,
        hideXhr: true,
    },
    chromeWebSecurity: false,
    retries: {
        runMode: 1,
        openMode: 0,
    },
    blockHosts: ['!*localhost*'],
    e2e: {
        baseUrl: 'http://localhost:5173',
        setupNodeEvents(on) {
            const options = {
                ...browserify.defaultOptions,
                typescript: require.resolve('typescript'),
            };

            on('file:preprocessor', cucumber.default(options));
        },
        specPattern: 'cypress/tests/**/*.{feature,features}',
    },
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        specPattern: 'src/**/*.test.tsx',
        viewportWidth: 680,
        viewportHeight: 768,
    },
});
