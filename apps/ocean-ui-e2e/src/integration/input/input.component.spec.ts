describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputcomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-input').should('exist');
  });
});