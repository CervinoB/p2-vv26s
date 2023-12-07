describe("Adição de Produtos ao Carrinho", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[class="login_logo"]').should("be.visible");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve adicionar produtos ao carrinho", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 2);
    cy.contains(".cart_item", "Sauce Labs Backpack");
    cy.contains(".cart_item", "Sauce Labs Bike Light");
  });

  it("Deve lidar com o limite máximo de produtos no carrinho", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    ).click();

    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("have.length", 6);

    // Tenta adicionar mais um produto e verifica se a mensagem de erro é exibida
    // Esse teste não é possivel acontecer pois o site não deixa escolher mais de 6
    // cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    // cy.get(".error-message-container").should("be.visible");
  });
});
