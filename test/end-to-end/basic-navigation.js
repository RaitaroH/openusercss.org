import test from 'ava'
import delay from 'delay'
import {remote} from 'webdriverio'

const client = remote({
  'desiredCapabilities': {
    'browserName': 'chrome'
  }
})

test.before(async (t) => {
  await client.init()
  .setViewportSize({
    'width':  1280,
    'height': 720
  })
  .url('http://localhost:5010')
  .waitForVisible('.ouc-app-root')
})

test.after.always(async (t) => {
  await client.end()
})

test('basic-navigation', async (t) => {
  await client.waitForVisible('.navbar')

  // /login
  await client.click('.navbar a[href="/login"]')
  t.true(await client.getUrl() === 'http://localhost:5010/login')
  await client.waitForVisible('.ouc-login-form')
  const loginForm = await client.getText('.ouc-login-form')
  const loginButton = await client.getText('.ouc-login-form .button')

  t.true(loginForm.includes('Log in to OpenUserCSS'))
  t.true(loginButton.includes('Login'))

  // /register
  await client.click('.navbar a[href="/register"]')
  t.true(await client.getUrl() === 'http://localhost:5010/register')
  await client.waitForVisible('.ouc-register-form')
  const registerForm = await client.getText('.ouc-register-form')
  const registerButton = await client.getText('.ouc-register-form .button')

  t.true(registerForm.includes('Create your OpenUserCSS account'))
  t.true(registerButton.includes('Register'))

  // /search
  await client.click('.navbar a[href="/search"]')
  t.true(await client.getUrl() === 'http://localhost:5010/search')
  await client.waitForVisible('input[name="search"]')
  const searchInput = await client.getHTML('input[name="search"]')

  t.true(searchInput.includes('placeholder="Search themes and users"'))
})

/* module.exports = {
  'Begin' (client) {
    client
    .resizeWindow(1280, 720)
    .url(client.launchUrl)
    .waitForElementVisible('.ouc-app-root', 1000)
  },

  'Footer contains correct text' (client) {
    client
    .assert.containsText('.footer', 'Copyright ©')
    .assert.containsText('.footer', new Date().getFullYear())
    .assert.containsText('.footer', 'Contact the administrator')
  },

  'Navbar contains correct text' (client) {
    client
    .assert.containsText('.navbar-brand', 'OpenUserCSS')
    .assert.containsText('.navbar-brand a[href="/"]', 'OpenUserCSS')
    .assert.containsText('.navbar-brand', 'Alpha!')
  },

  'Navbar navigation works' (client) {
    client
    .click('a[href="/login"].navbar-item')
    .assert.urlEquals('http://localhost:5010/login')
    .waitForElementVisible('.ouc-login-form', 1000)
    .assert.containsText('.ouc-form-section', 'Log in to OpenUserCSS')

    .click('a[href="/register"].navbar-item')
    .assert.urlEquals('http://localhost:5010/register')
    .waitForElementVisible('.ouc-register-form', 1000)
    .assert.containsText('.ouc-form-section', 'Create your OpenUserCSS account')
  },

  'Close Selenium session' (client) {
    client.end()
  }
} */
