import { restore, openNativeEditor } from "__support__/e2e/cypress";

const dbName = "Sample2";

describe("issue 18148", () => {
  beforeEach(() => {
    restore();
    cy.signInAsAdmin();

    cy.addH2SampleDataset({
      name: dbName,
    });

    openNativeEditor();
  });

  it("should not offer to save the question before it is actually possible to save it (metabase#18148)", () => {
    cy.findByText("Select a database");
    cy.findByText("Save").should("have.class", "disabled");

    cy.findByText(dbName).click();

    cy.get(".ace_content")
      .should("be.visible")
      .type("select foo");

    cy.findByText("Save").click();

    cy.get(".Modal").should("exist");
  });
});
