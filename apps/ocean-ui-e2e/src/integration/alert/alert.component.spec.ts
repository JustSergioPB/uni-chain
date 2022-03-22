describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=alertcomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-alert').should('exist');
  });
});