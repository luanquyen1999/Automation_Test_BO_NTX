exports.config = {
  specs: [
      'Login_page/test_script/TestLogin.js'
    ],
 
  hostname: 'localhost',
  port:'9515',
  path: '/',
  capabilities: [
      { 
        browserName: 'chrome'
    }
],
  framwork: 'mocha',
  mochaOpts: {
      ui: 'bdd', 
      timeout: 60000 
},
  LogLevel: 'info',
  sync: true,
  baseUrl: 'http://localhost',
};
