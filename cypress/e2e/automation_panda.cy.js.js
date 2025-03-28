/// <reference types="cypress" />

describe("Automation Panda Website Tests", () => {
  before(() => {
    
    cy.fixture("testData").as("data");
  });

  beforeEach(() => {
        cy.visit("/");
  });

  it("Verifies the title of the main page", function () {
    cy.title().should("eq", this.data.expectedTitle);
  });

  it("Clicks on Speaking and verifies the page title", function () {
    cy.contains("Speaking").click();
    cy.title().should("eq", this.data.speakingPageTitle);
  });

  it("Verifies 'Keynote Addresses' text is present", function () {
    cy.contains("Speaking").click();
    cy.contains(this.data.keynoteText).should("be.visible");
  });

  afterEach(() => {
    cy.log("Test case completed");
  });

  after(() => {
    cy.log("All tests executed");
  });
});
