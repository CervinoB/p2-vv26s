describe("template spec", () => {
  it("Login e Navegação", () => {

    // visita o site
    cy.visit("https://www.saucedemo.com/");

    // Login
    cy.get('[class="login_logo"]').should("be.visible");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Navegação
    cy.get('[class="title"]').should("be.visible");
    cy.get(".app_logo").contains("Swag Labs").should("be.visible");

    cy.get('[class="shopping_cart_link"]').click(); // navega para o carrinho
    cy.get("#continue-shopping").click(); // volta para a página inicial


  });
});
