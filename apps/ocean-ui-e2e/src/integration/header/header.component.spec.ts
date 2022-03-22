describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-header').should('exist');
  });
});