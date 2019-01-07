/* globals cy */
describe('Search for a film', () => {
  const idOfMovie = 550;
  const nameOfMovie = 'Fight Club';

  before(() => {
    cy.server();
    cy.route('/3/movie/popular*').as('getPopular');
    cy.route('/3/genre/movie/list*').as('getGender');
    cy.route(`/3/movie/${idOfMovie}?*`).as('getMovie');
  });

  beforeEach(() => {
    return cy.visit('/');
  });

  it('Search the Fight Club', () => {
    cy.get('.ant-input')
      .type(nameOfMovie)
      .get('.ant-btn')
      .click()
      .get(`[data-row-key="${idOfMovie}"] > .SearchTableTitle`)
      .click();

    cy.wait('@getMovie');

    cy.get('img').should('exist');
    cy.get('h2 > strong').contains(nameOfMovie);
    cy.get('.DetailInfoHeaderTagline').contains('Mischief. Mayhem. Soap.');
    cy.get('[class^="DetailInfoHomeButton"]')
      .contains('Home')
      .click();
  });
});
