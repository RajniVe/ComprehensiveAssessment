const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/",
    reporter: "cypress-mochawesome-reporter",
  },
});
