describe("Template spec", () => {
  it("Login e Navegação", () => {

    // Visita o site
    cy.visit("https://www.saucedemo.com/");

    // Verifica se o logotipo de login é visível
    cy.get('[class="login_logo"]').should("be.visible");

    // Preenche os campos de usuário e senha e faz login
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Verifica se o título da página após o login é visível
    cy.get('[class="title"]').should("be.visible");
    cy.get(".app_logo").contains("Swag Labs").should("be.visible");

    // Clica no carrinho para navegar para ele
    cy.get('[class="shopping_cart_link"]').click();

    // Clica para voltar para a página inicial
    cy.get("#continue-shopping").click();

    // Captura uma screenshot da página atual
    cy.screenshot("pagina-inicial");
  });
});
