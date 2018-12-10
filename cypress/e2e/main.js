/* globals cy */
describe('Search for a film', () => {
  const idOfFilm = 550;
  const nameOfFilm = 'Fight Club';

  beforeEach(() => {
    return cy.visit('/');
  });

  it('Search the Fight Club', () => {
    cy.get('.ant-input')
      .type(nameOfFilm)
      .get('.ant-btn')
      .click()
      .get(`[data-row-key="${idOfFilm}"] > .SearchTableTitle`)
      .click()
      .snapshot(nameOfFilm);
  });
});
