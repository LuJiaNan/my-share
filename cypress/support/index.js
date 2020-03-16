// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-plugin-snapshots/commands'
import '@cypress/code-coverage/support'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Screenshot.defaults({
    blackout: ['.ant-panel-body'],
    capture: 'runner',
    onAfterScreenshot ($el, props) {
      // props has information about the screenshot,
      // including but not limited to the following:
  
      // {
      //   path: '/Users/janelane/project/screenshots/my-screenshot.png',
      //   size: '15 kb',
      //   dimensions: {
      //     width: 1000,
      //     height: 660,
      //   },
      //   scaled: true,
      //   blackout: ['.foo'],
      //   duration: 2300,
      // }
      console.log(props)
      Cypress.log(props)
    },
})