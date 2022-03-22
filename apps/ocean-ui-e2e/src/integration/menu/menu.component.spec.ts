describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=menucomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-menu').should('exist');
  });
});