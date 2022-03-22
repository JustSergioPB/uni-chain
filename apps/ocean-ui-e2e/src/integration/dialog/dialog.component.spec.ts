describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dialogcomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-dialog').should('exist');
  });
});