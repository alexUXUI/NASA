describe('solarflares url', () => {
  beforeEach(()=> {
    cy.visit("/solar-flares");
  })
  it('should load the application', () => {
    cy.get('h1').should('exist')
    cy.findByText('Solar Flares').should('exist');
  });

  it('should intercept an API call', () => {
    cy.intercept({
      method: 'GET',
    })
  });
})
