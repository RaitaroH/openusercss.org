module.exports = {
  'Begin' (browser) {
    browser
    .resizeWindow(1280, 720)
    .url(browser.launchUrl)
    .waitForElementVisible('.ouc-app-root', 1000)
  },

  'Footer contains correct text' (browser) {
    browser
    .assert.containsText('.footer', 'Copyright ©')
    .assert.containsText('.footer', new Date().getFullYear())
    .assert.containsText('.footer', 'Contact the administrator')
  },

  'Navbar contains correct text' (browser) {
    browser
    .assert.containsText('.navbar-brand', 'OpenUserCSS')
    .assert.containsText('.navbar-brand a[href="/"]', 'OpenUserCSS')
    .assert.containsText('.navbar-brand', 'Alpha!')
  },

  'Navbar navigation works' (browser) {
    browser
    .click('a[href="/login"].navbar-item')
    .pause(400)
    .assert.urlEquals('http://localhost:5010/login')
    .waitForElementVisible('.ouc-login-form', 1000)
    .assert.containsText('.ouc-form-section', 'Log in to OpenUserCSS')

    .click('a[href="/register"].navbar-item')
    .pause(400)
    .assert.urlEquals('http://localhost:5010/register')
    .waitForElementVisible('.ouc-register-form', 1000)
    .assert.containsText('.ouc-form-section', 'Create your OpenUserCSS account')
  },

  'Close Selenium session' (browser) {
    browser.end()
  }
}
