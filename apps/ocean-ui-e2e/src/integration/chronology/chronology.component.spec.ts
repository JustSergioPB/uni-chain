describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chronologycomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-chronology').should('exist');
  });
});