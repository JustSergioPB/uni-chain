describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tablecomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-table').should('exist');
  });
});