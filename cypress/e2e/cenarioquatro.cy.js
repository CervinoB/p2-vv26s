describe("Finalização da Compra", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve finalizar a compra com sucesso e verificar produtos no resumo e recibo", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("John");
    cy.get('[data-test="lastName"]').type("Doe");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();

    cy.get(".cart_item").should("contain", "Sauce Labs Backpack");
    cy.get(".cart_item").should("contain", "Sauce Labs Bike Light");

    cy.get('[data-test="finish"]').click();

    cy.url().should("include", "/checkout-complete");
  });
});
