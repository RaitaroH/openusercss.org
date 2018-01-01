module.exports = {
  'src_folders': [
    'test/e2e'
  ],
  'output_folder':          'reports',
  'custom_commands_path':   '',
  'custom_assertions_path': '',
  'page_objects_path':      '',
  'globals_path':           '',

  'selenium': {
    'start_process': false,
    'server_path':   '',
    'log_path':      '',
    'port':          4444,
    'cli_args':      {
      'webdriver.chrome.driver': '',
      'webdriver.gecko.driver':  ''
    }
  },

  'test_settings': {
    'default': {
      'launch_url':    'http://localhost:5010',
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'silent':        true,
      'screenshots':   {
        'enabled': false,
        'path':    ''
      },
      'desiredCapabilities': {
        'browserName':   'chrome',
        'chromeOptions': {
          'args': [
            '--no-sandbox',
            '--disk-cache-size 0'
          ]
        },
        'marionette': true
      }
    }
  }
}
