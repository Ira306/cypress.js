describe('Автотесты для формы логина и пароля на Staya', function () {

    it('Проверка логики заведения аккаунта', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('koster@gmail.com');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('12345Pass');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button').click();
        cy.contains('Мои заказы');
                  })
    })

  it('Проверка ошибки авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('koster@gmail.com');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('12345Password');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
                  })
  