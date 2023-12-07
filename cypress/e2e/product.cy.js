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

    // Verifica se há 6 produtos na página inicial e realiza outras verificações
    cy.get('[class="inventory_list"]')
      .children()
      .should("have.length", 6)
      .then(() => {
        // Log para confirmar que existem 6 produtos na página inicial
        cy.log("Existem 6 produtos na página inicial");

        // Verifica se o nome do produto "Sauce Labs Backpack" está visível
        cy.contains("Sauce Labs Backpack").should("be.visible");

        // Verifica se a descrição do produto está visível
        cy.contains(
          "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
        ).should("be.visible");

        // Verifica se o preço do produto "Sauce Labs Backpack" está visível
        cy.contains("29.99").should("be.visible");

        // Verifica se o botão para adicionar o produto no carrinho está visível
        cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible");
      });

    // Verifica metodo de busca/filtro
    cy.get('[class="product_sort_container"]').select("za");
    cy.get('[class="inventory_list"]')
      .children()
      .first()
      .contains("Test.allTheThings() T-Shirt (Red)")
      .should("be.visible");
  });
});
